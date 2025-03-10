<template>
    <div class="input-container">
        <form action="post" class="form-container">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="text" name="phoneNum" placeholder="Phone Number" required>
            <input type="text" name="email" placeholder="Email Address" required>
            <input type="datetime-local" name="date" placeholder="Date" required>
            <input type="file" id="file" accept="image/*" required />
            <input type="button" name="submit" value="Submit">
        </form>
    </div>
</template>
<script>

</script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    height: 500px;
    gap: 6px;
    align-items: center;
}
.form-container input {
    border: 1px solid black;
}
</style>