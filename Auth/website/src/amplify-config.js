// This file is used for manual configuration of the Amplify library.
// When Amplify is used in conjunction with the Amplify CLI toolchain or AWS Mobile Hub to manage backend resources,
// an aws-exports.js file is auto-generated and can be used instead of the below to automatically configure the Amplify library.
// In this workshop, we are using the Amplify client libraries without the CLI toolchain so you should edit this file manually.

const awsConfig = {
    Auth: {
        identityPoolId: 'us-east-1:e9f89d3d-9b76-470e-bd74-299acc7f4a00', // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
        region: 'us-east-1', // example: 'us-east-2'
        userPoolId: 'us-east-1_ZLxNt254Q', // example: 'us-east-2_teEUQbkUh'
        userPoolWebClientId: '58jefsdnlem3h72jps3fklb9b' // example: '3k09ptd8kn8qk2hpk07qopr86'
    },
    API: {
        endpoints: [
            {
                name: 'WildRydesAPI',
                endpoint: 'https://wif4cdreef.execute-api.us-east-1.amazonaws.com/prod', // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
                region: 'us-east-1' // example: 'us-east-2'
            }
        ]
    },
    Storage: {
        bucket: 'wildrydesbackend-profilepicturesbucket-e1ztmskwa57t', //example: 'wildrydesbackend-profilepicturesbucket-1wgssc97ekdph'
        region: 'us-east-1' // example: 'us-east-2'
    }
}

export default awsConfig;
