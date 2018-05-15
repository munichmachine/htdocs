
<?php
session_start(); // initialise a session - commented out as it seems to auto start
$SESSION['counter']++; // increment a session counter
?>
<html>
<head>
</head>
<body>
<?php echo "You have viewed this page ". $SESSION['counter'] . " times"; ?>
</body>
</html>