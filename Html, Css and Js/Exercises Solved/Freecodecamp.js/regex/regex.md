g --> global: Will search all matchs.

i--> insensitive: Disable case-sensitve.

None--> Will only search the first match cuz it doesnt matter if has more

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

### Metacharacters 

*-\d* --> match any digit character (same as [0-9])

*-\w* --> match any word character (a-z, A-Z, 0-9 and _'S)

*-\s* --> match a whitespace character (spaces, tabs)

*-\t* --> --> match a tab character only

**Notes:**

d --> matches the literal character , 'd'

\d matches any digit character

---

### Special Character 

'+' The one-or-more quantifier 

'\' The escape character

'[]' Character set 

'[^]' Negate Symbol in a character set 

'?' The zero-or-one quantifier (makes a preceding char opcional)

'.' Any character whatsoever (expept the newline charater)

'*' The 0-or-more quantifier (a bit like +)

### Start and End pattern

As you writing your expression u got throught the bunch of character however its so important to say to "regex" when start and end up the expression. Like that: 

^abc@

abc -- that right 

abc abc -- Not right

abcabc-- Not right 

### Alternate Character

pyre|type pyre --> its match
pyre|type type -- its match 

pyre|type type -- pyre type or pyretypae -- It doesnt match

(p|t)ype -- type or pype match