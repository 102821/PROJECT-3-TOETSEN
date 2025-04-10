<?php 
$orderedArticles = [
    
]

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FunFactory</title>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <div class="logo" onclick="location.href = 'index.html';"><img src="../imgs/logo.png" alt=""></div>
        <nav>
            <ul>
                <li><a href="index.html">Homepagina</a></li>
                <li><a href="">Producten</a></li>
                <li><a href="">Over</a></li>
            </ul>
        </nav>
        <div class="burger-menu" style="display: none;"><i class="fa-solid fa-bars"></i></div>
    </header>
    <main class="result-page-container">
        <img src="../imgs/check.png" alt="img" class="check-img">
        <h2>Uw bestelling is bevestigd en wordt binnenkort verzonden.</h2>
        <p>Uw bestelling is bevestigd en wordt binnenkort verzonden.</p>
        <section class="customer-order-container">
            <div class="customer-info">
                <h3>Jouw gegevens</h3>
                <dl>
                    <dt>Voornaam:</dt>
                    <dd>Mokhless</dd>

                    <dt>Achternaam: </dt>
                    <dd>Kadiri</dd>
                
                    <dt>Email:</dt>
                    <dd>john.doe@example.com</dd>
                
                    <dt>Adres:</dt>
                    <dd>+123 456 7890</dd>
                
                    <dt>Postcode:</dt>
                    <dd>123 Example Street, Cityville</dd>
                </dl>
            </div>
            <div class="orders">
                <h3>Jouw bestelling</h3>
                <div class="order">

                    <div class="left">
                        <img src="../imgs/products/p1.png" alt="">
                        <div>
                            <h4>Product naam</h4>
                            <span class="produt-quan">1</span>
                        </div>
                    </div>
                    <div class="right"><span class="product-price">40$</span></div>
                </div>
            </div>
        </section>
    </main>
    <script src="../js/script.js"></script>
</body>
</html>