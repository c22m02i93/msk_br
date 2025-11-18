<!-- Хедер Барышской епархии (обновлённый) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

<div class="head" style="width:100%; background:#fff; border-bottom:1px solid #d7d7d7;">

    <!-- Контейнер с ограничением ширины -->
    <div style="max-width:1100px; margin:0 auto;">

        <!-- Верхняя строка: РПЦ + соцкнопки -->
        <div style="
            width:90%;
            padding:10px 20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            font-family:'Segoe UI Light', arial;
        ">
            <!-- РПЦ -->
            <div style="color:#999; font-size:14px; white-space:nowrap;">
                Русская Православная Церковь – Симбирская митрополия
            </div>

            <!-- Соцкнопки -->
            <div style="display:flex; align-items:center; gap:18px; font-size:16px;">
                <a href="rss.php" title="RSS" style="color:#666;"><i class="fa-solid fa-square-rss"></i></a>
                <a href="http://pda.barysh-eparhia.ru/" title="КПК" style="color:#666;"><i class="fa-solid fa-mobile-screen"></i></a>
                <a href="http://vk.com/barysheparhia" title="ВКонтакте" style="color:#666;"><i class="fa-brands fa-vk"></i></a>

                <!-- Иконка поиска -->
                <button onclick="const sb = document.getElementById('search-block'); sb.style.display = sb.style.display === 'none' ? 'block' : 'none';" 
                    style="background:none; border:none; cursor:pointer; color:#666; font-size:18px;">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

        <!-- Логотип + Название -->
        <div style="
            width:100%;
            padding:0px 20px 10px 20px;
            display:flex;
            align-items:center;
            gap:20px;
        ">
            <!-- Логотип -->
            <a href="/">
                <img src="IMG/logo.png" alt="Логотип" style="height:70px;">
            </a>

            <!--Название + по благословению-->
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <div style="
                    font-family:'Segoe UI Light', arial;
                    font-size:38px;
                    color:#444;
                    letter-spacing:3px;
                ">
                    БАРЫШСКАЯ ЕПАРХИЯ
                </div>

                <div style="
                    font-family:'Segoe UI Light', arial;
                    color:#999;
                    font-size:14px;
                    margin-top:5px;
                ">
                    По благословению митрополита Симбирского и Новоспасского Лонгина, временно управляющего Барышской епархией
                </div>
            </div>
        </div>

        <!-- Поиск -->
        <div id="search-block" style="display:none; width:100%; text-align:center; padding:12px 0;">
            <input type="text" placeholder="Поиск по сайту"
                style="width:60%; max-width:500px; padding:8px; font-size:14px;">
        </div>

        <!-- Разделительная линия -->
        <div style="width:100%; border-top:1px solid #d7d7d7; margin-top:10px;"></div>

        <!-- Меню -->
        <div id="menu" style="width:100%; padding-top:10px;">
            <!-- include('menu.php'); -->
        </div>

    </div>
</div>