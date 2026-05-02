let s = "assiutinupperegypt", x = "", m = ""

function pop_back() {
    for (let i = 0; i < s.length - 1; i++) {
        x += s[i]
    }
    s = x
}

function front() {
    // return 
    console.log(s[0])
}

function back() {
    console.log(s[s.length - 1])
}

// function sort(l,r){ // 5, 8 - t i n u = i n t u 
//     // if s[i] < s[i + 1]
//     // 105 < 116
//     // then t = s[i]
//     // s[i] = s[i + 1]
//     // s[i + 1] = t
//     for(let i = l; i <= r; i++){
//         for(let j = l; j <= r; j++){
//             let t = ""
//             if(s[i][j].charCodeAt() > s[i][j + 1].charCodeAt()){
//                 t = s[i][j] // s[0][0] = 116 | s[0][1] = 105 => t = 116
//                 s[i][j] = s[i][j + 1] // s[0][0] = s[0][1] = 105
//                 s[i][j + 1] = t // s[0][1] = 116
//             }
//             // m += s[i]
//         }

//     console.log(s[i].charCodeAt())
//     }
// }

function reverse(l, r) {
    let e = ""
    for (let i = r - 1; i >= l - 1; i--) { // 1 , 6 assuit 0,1,2,3,4,5
        e += s[i]// ش
    }
    console.log(e)
}

function print(pos) {
    console.log(s[pos - 1])
}

function substr(l, r) {
    let e = ""
    for (let i = l - 1; i <= r - 1; i++) { // 1 , 6 assuit 0,1,2,3,4,5
        e += s[i]
    }
    console.log(e)
}

function push_back(x) {
    console.log(s + x)
}

push_back("ahmed")
// substr(14,18)
// print(18)
// reverse(1,6)
// front()
// back()

// console.log(s);t