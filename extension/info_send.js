module.exports = (nodecg) => {
    const twitterHandleRep = nodecg.Replicant("twitter-handle");
    const descriptionRep = nodecg.Replicant("description");
    const guestsRep = nodecg.Replicant("guests");
    const guestHead = "ゲスト: "
    let frameInfo = [];
    let queueInfo = [];

    if(twitterHandleRep.value !== '' && twitterHandleRep.value != undefined){
        frameInfo.push({ 
            'svg': "twitter_logo_black.svg",
            'materialIcon': "",
            'content': "@"+twitterHandleRep.value
        })
        queueInfo.push({ 
            'svg': "twitter_logo_white.svg",
            'materialIcon': "",
            'content': "@"+twitterHandleRep.value
        })
    }
    if(descriptionRep.value !== '' && descriptionRep.value != undefined){
        frameInfo.push({ 
            'svg': "",
            'materialIcon': "description",
            'content': descriptionRep.value.replace(/\n/g," ")
        })
    }
    if(guestsRep.value !== [] && typeof guestsRep.value !== 'undefined'){
        let info = {
            'svg': "",
            'materialIcon': "people",
            'content': guestHead
        }
        guestsRep.value.forEach(element => {
            if (info.content !== guestHead)
                info.content += " / ";
            info.content += element;
        });
        frameInfo.push(info);
        queueInfo.push(info);
    }
    nodecg.Replicant("frame-info").value = frameInfo; 
}