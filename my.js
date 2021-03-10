/*
Bai tap1:
- Viết hàm truyền vào mảng số nguyên bất kỳ,
  sau đó đảo ngược mảng số nguyên đó
  + input: [1, 3, 4, 6]  -> [6, 4, 3, 1]
  + output: [6, 4, 3, 1]
Bai tap2:
- Tim gia tri nho nhat trong mang number
  + input: [-2,-5, 3, 0, 9, -6]
  + output: min = -6

Bài tập về nhà:
Bai tap3:
- Viết chương trình nhập vào một năm, đưa ra thế kỷ của năm đó.
Bai tap4:
- Viết chương trình kiểm tra một chuỗi có đối xứng hay ko?
test1:
+ input: 'abababa'
+ output: true
test2:
+ input: 'abbaba'
+ output: false
Bai tap5:
- Viết chương trình tính tổng các phần tử trong mảng 2 chiều.
Lưu ý: sử dụng kiến thức về hàm
*/

// B1

let array = [1, 3, 4, 6];

function reverseArray(array) {
    // code logic
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    // tra ve mang bi dao nguoc
    return newArray;
}

function findMinArray(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

document.write(findMinArray(array));

