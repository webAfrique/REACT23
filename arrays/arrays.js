// Task 1
// Create an array called "names" and set it's items to be
// David, Ann, Leia, Mathew and Mark.
// Print the array.
const names = ['David', 'Ann', 'Leia', 'Mathew', 'Mark']
document.querySelector('#task1').textContent = names

// Task 2
// Print the second item of the array from the task 1.
document.querySelector('#task2').textContent = names[1]

// Task 3
// Print the length of the array.
document.querySelector('#task3').textContent = names.length

// Task 4
// Print the last item of the array
document.querySelector('#task4').textContent = names[names.length - 1]

// Task 5
// Add Peter as the last item to the array and print the whole array
names.push('Peter')
document.querySelector('#task5').textContent = names

// Task 6
// Print the array with spaces, not commas
document.querySelector('#task6').textContent = names.join(' ')

// Task 7
// Replace Mathew in the array with Lisa and Abraham
names.splice(3, 1, 'Lisa', 'Abraham')
document.querySelector('#task7').textContent = names

// Task 8
// Sort the array in the alphabetical order and print it
document.querySelector('#task8').textContent = names.sort()

// Task 9
// Create an array called numbers and fill it with values 1, 7, 45, 32, 27, 86.
// Sort the numbers from largest to smallest. Print them.
const numbers = [1, 7, 45, 32, 27, 86]
document.querySelector('#task9').textContent = numbers.sort((a,b) => b - a)

// Task 10
// Randomize the numbers array.
document.querySelector('#task10').textContent = numbers.sort(() => 0.5 - Math.random())

// Task 11
// Find the largest and smallest value from the numbers array using sort() function.
// Print those values.
const sorted = numbers.sort((a,b) => a - b)
const min = sorted[0]
const max = sorted[sorted.length - 1]
document.querySelector('#task11').textContent = `Largest: ${max}, smallest: ${min}`

