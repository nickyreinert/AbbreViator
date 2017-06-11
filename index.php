<!DOCTYPE html>
<html lang="de">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Abbreviator - creating abbrevations">
    <meta name="author" content="Nicky Reinert">

    <title>AbbreViator</title>


	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<link rel="stylesheet" href="css/styles.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


</head>

<body cz-shortcut-listen="true">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="js/script.js"></script>

	<div class="container">
		<div class="page-header">
			<h1>AbbreViator</h1>
		</div>
		<div class="row">
		    <div class="col-sm-12" style="">
				<p>Welcome to AbbraViator. AbbraViator takes your text and abbreviate every word in it. The result is your shortened text and a list of all abbrevations.</p>
				<p>Features: A. will not abbreviate first and last words in a sentence. A. will not abbreviate words inside "quotes". </p>
				<label for="input">Paste your text here:</label>
				<textarea class="form-control" rows="5" id="input">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</textarea>
			</div>
		</div>
		<div class="row hiddenOnLoad">
		    <div class="col-sm-12" style="">
				<h3>Abbra Cadabbra, AbbreViator.</h3>

			</div>
		</div>
		<div class="row hiddenOnLoad">
		    <div class="col-sm-3" style="">
				<p>Abbrevations:</p>
				<div class="table-responsive">

					<table class="table" id="abbreviationList"></table>
				</div>
			</div>
		    <div class="col-sm-9" style="">
				<p>Abbreviated text:</p>

				<div id="output">
				</div>
			</div>

		</div>

	</div>
	<footer class="footer">
		<div class="container">
			<p class="text-muted">&copy; 2016 - 2116 mail at nicky reinert dot com | Proudly made with <a href="http://getbootstrap.com/">bootstrap</a></p>
		</div>
	</footer>
</body>

</html>
