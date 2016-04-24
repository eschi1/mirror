<html>
<head>
	<title>Magic Mirror</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<script type="text/javascript">
		var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
	</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>

	<div class="top left">
		<div class="news small"></div>
	</div>

	<div class="top right">
		
	</div>

	<div class="center-ver center-hor">
		
	</div>

	<div class="lower-third center-hor">
		
	</div>
	<div class="bottom center-hor-left">
		<div class="temp"></div>
		<div>
			<div class="windsun small dimmed"></div>
			<div class="small dimmed" id="traffic"></div>
			<div id="refresh">
			<div class="small dimmed" id="bus"></div>
			<div class="small dimmed" id="ubahn_L"></div>
			<div class="small dimmed" id="ubahn_R"></div>
			</div>
			<div class="small dimmed" id="bitcoin"></div>
		</div>
	</div>

	<div class="bottom center-hor-right">
		<div class="time" id="time"></div>
		<div class="date small dimmed"></div>
	</div>

</div>

<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/weather/weather.js"></script>
<script src="js/time/time.js"></script>
<script src="js/news/news.js"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<script src="js/maps/maps_result.js"></script>
<script src="js/wiener_linien/oeffis.js"></script>
<script src="js/bitcoin/bitcoin.js"></script>


<?php  include(dirname(__FILE__).'/controllers/modules.php');?>
</body>
</html>
