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

***[^] always first***

---

## Letter Range[a-z] or Range[0-9]

#### **<ins>To find leter in specify range<ins>**

abcdefghijklmnopqrstuvwxyz

*/[b-h]/ -- bcdefgh*

123456789

*/[2-7]/ -- 234567*

---

## Repetitions 

#### **<ins>Is used to specify how many times characters will be repeted. Like: '*', '+' and '?'<ins>**

#### Asterisk '*'

##### **The Asterisk is a quantifier that means "zero or more". It means the character or group that precede can apper zero or much much more**

**<ins>The first letter is always mandatory<ins>**

*aaaab -->* /a * b/ --> *aaaab*

*ababaaa -->* /ab * b/ --> *ab ab*

*ababaaac -->* /ab * a/ --> *aba aaa*

#### Plus Sign '*'

##### **<ins>To indicate that a character can occour much times on a statment<ins>**

**When we use a plus it indicates that letter can repeat many times**

*ber -->* /be+r/ --> *ber*

*beer -->* /be+r/ --> *beer*

#### Question Mark '?'

##### **<ins>It is used to indicate that a character is optional<ins>**

*colour -->* /colou?r/ --> *colour*

*color -->* /colou?r/ --> *color*

#### Curly Braces '{}'

##### **<ins>It is used to indicate to express a certain number of occurences of a character at the end we write curly braces {n}<ins>**


*ber -->* /be{2}/ --> *null*

*beer -->* /be{2}/ --> *beer*

##### **<ins>It indicates at least a certain number of character<ins>**

*ber -->* /be{2,}/ --> *null*

*beer -->* /be{2,}/ --> *beer*

*beer -->* /be{3,}/ --> *beer*
