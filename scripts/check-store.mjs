import {readFile} from 'node:fs/promises';
import {site,games} from '../src/config.mjs';
import {publisher,storeVerification,appProfiles} from '../src/store-profile.mjs';
const missing=[];
if(!publisher.legalName)missing.push('Publisher: store developer/seller name has not been supplied.');
if(!publisher.country)missing.push('Publisher: country has not been supplied.');
if(!storeVerification.publisherConfirmed)missing.push('Publisher identity has not been confirmed by the owner.');
if(!storeVerification.supportEmailActive)missing.push(`${site.supportEmail}: mailbox activation has not been confirmed.`);
if(!storeVerification.submittedBuildVerified)missing.push('The submitted app builds have not been verified against the confirmed data practices (including ad/purchase SDKs and disabled gameplay analytics).');
if(!storeVerification.publicHttpsVerified)missing.push('Public HTTPS access to the final website has not been verified.');
if(!/^https:\/\//.test(site.origin)||/localhost|127\.0\.0\.1/.test(site.origin))missing.push('The canonical site origin must be a public HTTPS address.');
for(const game of games){
 const profile=appProfiles[game.id];
 if(!profile.releaseConfirmed)missing.push(`${game.name}: store-build data practices have not been confirmed.`);
 const unresolved=['accounts','advertising','analytics','purchases','subscriptions','cloudSaves'].filter(key=>typeof profile[key]!=='boolean');
 if(unresolved.length)missing.push(`${game.name}: confirm ${unresolved.join(', ')}.`);
 if(!profile.targetAudience)missing.push(`${game.name}: target audience has not been confirmed.`);
 for(const key of ['support','deletionRequests',...(profile.analytics?['analytics']:[]),...(profile.purchases?['purchases']:[])]){
  if(!profile.retention[key])missing.push(`${game.name}: ${key} retention/handling period has not been confirmed.`);
 }
 for(const route of ['contact','support','privacy','privacy-choices','delete-data','terms']){
  const html=await readFile(`dist/${game.id}/${route}/index.html`,'utf8');
  if(!html.includes(game.name)||!html.includes(site.supportEmail))missing.push(`${game.name}/${route}: app name or contact email missing.`);
 }
}
if(missing.length){
 console.error('Store submission is not ready. Complete the following facts and match the policy text to the final build:\n'+missing.map(x=>' - '+x).join('\n'));
 process.exitCode=1;
}else console.log('Required facts and local pages are present. Review store privacy/Data safety disclosures and verify public URLs against the submitted build. This check is not store approval.');
