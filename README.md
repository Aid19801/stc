# VideoHead 

Videohead is to be a new video sharing platform (ambitious i know) whereby a group of London based comedians release:

Viral efforts
Podcasts
Sketches
Memes

The idea is to (re-)produce a VHS rental store look/feel.

At the moment this is a very basic effort using React, Redux, ES6.

The data is provided via a JSON-server rather than Postgres / MySQL. Though in time i may re-explore using an orthodox DB.

The CMS for the platform is self-built (and also very _early days_ yet). But can be found here:
https://github.com/Aid19801/stc-cms

To Start/Contribute To VideoHead:

Clone the CMS (see above)
cd into stc-cms
yarn
yarn start:server
This will start on port 3004

Clone stc
cd into stc
yarn
yarn start
This will start on 3000 pointing to json-server.




