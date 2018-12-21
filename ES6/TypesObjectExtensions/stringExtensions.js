let title = 'Santa Barbara Surf Riders';

// Check if strings starts with substring
console.log(title.startsWith('Santa'));

// Check if strings ends with substring
console.log(title.endsWith('Santa'));

// Check if strings includes substring
console.log(title.includes('Surf'));

var title_with_emoji = "Surfer Emoji: \u{1f3c4}";
console.log(title_with_emoji);

// Prints out real length
console.log(title_with_emoji.normalize().length);

// Repeat String
console.log(title_with_emoji.repeat(3));
