class Form
{
    constructor()
    {



    }

    display()
    {

        var title = createElement('h4');
        title.html("Car Racing Game");
        title.position(200,50);

        var input= createInput("name");
        input.position(300,250);
        var button= createButton("play");
        button.position(400,350);
        
        var greeting= createElement('h3');
        
        button.mousePressed(function()
        {
            input.hide();
            button.hide();  
            
            var name= input.value();
            playerCount = playerCount +1;
            player.update(name);
            player.updateCount(playerCount);
            
            greeting.html("Hello " + name);
            greeting.position(200,150);
        });

        
    }



}