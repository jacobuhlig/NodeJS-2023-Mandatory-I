<div class="outer">
<div class="inner">
<form action="/api/admin" method="post">
<h1>New article</h1>
<div class="inputWrapper">
<div class="inputElement">
<label>Title:</label>
<input id="new-title" type="text" name="title" required>
</div>
<div class="inputElement">
<label>Content:</label>
<textarea id="new-content" type="text" name="content" required oninput="autoResize(this)"></textarea>
</div>
</div>
<button type="submit">Add</button>
</form>
</div>
</div>

<script src="/pages/admin/admin.js"></script>