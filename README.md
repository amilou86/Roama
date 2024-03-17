# Roama

run json server to fetch data: // npx json-server --watch src/components/utils/random-posts.json --port 8000

profile pic testing url: https://www.thispersondoesnotexist.com
post image testing url: https://placebear.com/g/200/200

To get the translation working  do the following:
- Go to https://rapidapi.com/myl117/api/swift-translate
- Sign up to obtain an API key
- Create a new file called keyConfig.js in the utils folder.
- Copy and paste the below code into the keyConfig.js file.

```
const API_KEY = 'YOUR-API-KEY-GOES-HERE';
export { API_KEY };
```

- Replace **YOUR-API-KEY-GOES-HERE** with your API key