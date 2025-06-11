/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let count = {}
  for (let letter of s) {
      if(count[letter]) count[letter]++;
      else count[letter] = 1
  }
  for (let letter of t){
      if(!count[letter]) return false;
      count[letter]--;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("aa", "ab")); //false
