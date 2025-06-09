<?php
    // print_r($viewData);
?>
<form method="POST" action="?action=players_character">
    <div class="form-group">
        <label for="character_name">Nazwa postaci:</label>
        <input type="text" id="character_name" name="character_name" class="form-control" required>
    </div>
    <div class="form-group">
        <label for="character_class">Klasa postaci:</label>
        <input type="text" id="character_class" name="character_class" class="form-control" required>
    </div>
    <div class="form-group">
        <label for="character_content">Opcje postaci:</label>
        <textarea id="character_content" name="character_content" class="form-control" rows="15" 
            required><?= $viewData['characters']; ?></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Zapisz postać</button>
</form>