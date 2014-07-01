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
			
			for(i = 0; i < this.blocked.length; i++)
			{
				var b = this.blocked[i];
				var w = parseInt(b.getStyle("width"));
				var h = parseInt(b.getStyle("height"));

				// this is the endpoint for the alternate ad server
				var u = "alternate.php?w="+w+"&h="+h
				
				// Create a replacement iframe				
				var r = new Element("iframe");
				r.width = w;
				r.height = h;
				r.className = b.className;
				r.src = u;
								
				l("Replaced #" + b.identify() + " with " + w + "x" + h + " iframe:" + u);
				
				// Swap out advert with iframe				
				new Element.replace(this.blocked[i], r);
			}
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