class Game{
    constructor(){

    }

    getState(){
        var gameStateInfo = database.ref('gameState');
        gameStateInfo.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        }); 
    }

async start(){
    if(gameState === 0){
        
    }
    form = new Form();
    form.display();
}

    
}