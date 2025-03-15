// Simple search functionality
document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const comments = document.querySelectorAll('.comment');

    comments.forEach(comment => {
        const text = comment.innerText.toLowerCase();
        comment.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Load and fade comments (dummy logic, replace with actual API if needed)
function rotateComments() {
    const stacks = document.querySelectorAll('.comment-stack');

    stacks.forEach(stack => {
        const comments = stack.children;
        if (comments.length > 1) {
            const firstComment = comments[0];
            stack.append(firstComment);
        }
    });
}

setInterval(rotateComments, 60000);
