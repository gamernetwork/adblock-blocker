var Watchman = Class.create({
	
	initialize: function()
	{	
		window.setTimeout(this.run, 3000);
	},
	
	run: function()
	{			
		this.ads = $$(".advert");
		this.log = $("log");
		this.blocked = [];
		
		// Check which ads have been blocked
		for(i = 0; i < this.ads.length; i++)
		{
			if(this.ads[i].innerHTML == "")
			{
				this.blocked.push(this.ads[i]);
			}
		}
		
		// Have any ads been blocked?
		if(this.blocked.length > 0)
		{
			l(this.blocked.length + " ads blocked. Boo!");

			// Switch
			l("Switching to alternative ad server");

            jQuery.getScript( "http://ghost.gamer-network.net/www/delivery/spc.php?zones=1|2|3|4|5|6&r=" + Math.floor(Math.random()*99999999), jQuery.proxy( function() {
                for(i = 0; i < this.blocked.length; i++) {

                    var b = this.blocked[i];
                    var w = parseInt(b.getStyle("width"));
                    var h = parseInt(b.getStyle("height"));

                    l("Replaced #" + b.identify() + " with " + w + "x" + h);
                    
                    // Swap out advert with iframe				
                    b.innerHTML = OA_output[ jQuery(b).attr('data-ghost-zone') ];
                }
            }, this ) );
                        
			
		}
		else
		{
			l("No ads blocked. Hooray!");
		}

		function l(s)
		{
			this.log.innerHTML += s + "\n";
		}
	}
});
