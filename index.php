
<!DOCTYPE html>
<html lang="en">
<head>
	<title>AdBlock-blocker</title>
	
	<link rel="stylesheet/less" href="less/base.less?v=<?=microtime(true);?>"/>
	<script>
		localStorage.clear();
		less = {}; less.env = 'development';
	</script>
	<script src="scripts/less.js?v=<?=microtime(true);?>"></script>	
</head>
<body>
	<div class="document">
	
		<div class="page-wrapper">	
			<div class="page">
					
				<article>
					<header>
						<h1>Adblock-blocker</h1>
						<p>A demonstration of how to serve text-based adverts to users running AdBlock.</p>
					</header>

					<section>
						
						<pre id="log"></pre>
											
						<div id="leader" class="advert leaderboard" data-ad-zone="488833"></div>
						<div id="mpu" class="advert mpu" data-ad-zone="488835"></div>
						<div id="halfpage" class="advert halfpage" data-ad-zone="490476"></div>
						
					</section>
				</article>
				
			</div>
		</div>
	</div>

    <script src="//ajax.googleapis.com/ajax/libs/prototype/1.7.1/prototype.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">var jQuery = jQuery.noConflict();</script>
	
	<script src="http://www.modojo.com/static/scripts/postscribe.js?version=1.2"></script>
	<script src="http://www.modojo.com/static/scripts/openxJSON.js?version=1.2"></script>

	<script type="text/javascript">
		jQuery('document').ready(function()
		{
	 		jQuery('.advert').getOXJSONads();
		});
	</script>

	<script src="scripts/Watchman.js"></script>	
	<script>		
		var watchman = new Watchman({});
	</script>
</body>
</html>