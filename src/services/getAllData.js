const { Firestore } = require('@google-cloud/firestore');

async function getAllData() {
    const db = new Firestore({
        projectId: 'submissionmlgc-royanrosyad',
        databaseId: 'prediksi-cancer'
    });
    const predictCollection = db.collection('predictions');
    
    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;