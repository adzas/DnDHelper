
<ol class="nav nav-pills">
<?php 
foreach ($viewData['menu'] as $key => $value) {
    $active = '';
    if ($viewData['action'] == $key) {
        $active = 'active';
    }
    echo '<li class="nav-item"><a class="nav-link ' . $active . '" href="./index.php?action=' . $key . '">' . $value . '</a></li>';
}
?>
</ol>
