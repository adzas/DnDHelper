
<ol class="nav nav-pills">
    <li class="nav-item">
        <a class="<?= $action == Action::ACTION_CONFIGURATION ? 'active' : ''; ?> nav-link" 
            href="./index.php?action=<?=Action::ACTION_CONFIGURATION;?>">
            Konfiguracja ogólna
        </a>
    </li>
    <li class="nav-item">
        <a class="<?= $action == Action::ACTION_CONFIGURATION_LIST ? 'active' : ''; ?> nav-link" 
            href="./index.php?action=<?=Action::ACTION_CONFIGURATION_LIST;?>">
            Konfiguracja list wartości
        </a>
    </li>
    <li class="nav-item">
        <a class="<?= $action == Action::ACTION_ENEMY_TYPES ? 'active' : ''; ?> nav-link" 
            href="./index.php?action=<?=Action::ACTION_ENEMY_TYPES;?>">
            Lista wrogów
        </a>
    </li>
    <li class="nav-item">
        <a class="<?= $action == Action::ACTION_PLAYERS_CHARACTER ? 'active' : ''; ?> nav-link" 
            href="./index.php?action=<?=Action::ACTION_PLAYERS_CHARACTER;?>">
            Edycja graczy
        </a>
    </li>
    <li class="nav-item"><a class="nav-link" href="./index.php?action=logout">Logout</a></li>
</ol>
