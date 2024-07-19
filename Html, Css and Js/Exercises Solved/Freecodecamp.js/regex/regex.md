## Basic  Matchers

#### **<ins>/ / -- find the word inside the text. It verify if word match:<ins>**

*"There is a cat" -- /cat/ -> true*

---

## Dot .: Any Character

#### **<ins>It allows to select whatever character<ins>**

*abcde1235#$%! - /./ --> Will select all*

---

## Character Sets [abc]

#### **<ins>It allows select a specify character<ins>**

**List: bar, ber, bir, bor, bur**

*b[a]r -- bar*
*b[i]r - bur*

*b[au]r - bar, bur*


---

## Negated Character Sets [^abc]

#### **<ins>If can find a word except one do that<ins>**

*b[^au]r -- ber, bir, bor*

---

## Letter Range[a-z]

#### **<ins>To find leter in specify range<ins>**

abcdefghijklmnopqrstuvwxyz

*/[b-h]/ -- bcdefgh*

## Number Range[0-9]

