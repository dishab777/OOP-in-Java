const C=s=>'<pre><code>'+s.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</code></pre>';
const N=t=>'<div class="box note"><b>Important Note</b>'+t+'</div>';
const R=t=>'<div class="box rem"><b>Must Remember</b>'+t+'</div>';
const K=a=>'<div class="box key"><b>Key Points</b><ul>'+a.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
const Q=(c,a)=>C(c)+'<details><summary>Predict the output — show answer</summary>'+a+'</details>';
const T=(h,rows)=>'<div class="tw"><table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</table></div>';
const S=[
{g:'1 · Foundations',id:'oop-intro',t:'Introduction to OOP',h:`
<h3>Why study OOP?</h3><p>Procedural languages (C, Pascal) are great for small, linear tasks but struggle when programs grow. OOP (Java, C++, Python) organises code around real-world <b>objects</b> instead of sequences of functions. It is the industry standard for managing large-scale complexity, improving reusability and keeping data secure.</p>
<h3>History and evolution of programming</h3><p>Programming styles developed as software problems grew. Machine code and assembly operate close to the hardware; procedural languages group instructions into functions; structured and modular design organize larger programs into manageable routines. Object-oriented technology groups related state and behavior into cooperating objects, which helps model domains with many entities and relationships.</p>${T(['Period / idea','What changed'],[['Early computing','Machine instructions and assembly gave direct control but tied programs closely to hardware.'],['Procedural programming','Languages such as C and Pascal organize work into procedures/functions; effective for clear, linear tasks, but shared data can become difficult to protect as systems grow.'],['Simula (1960s)','Introduced class/object ideas to model simulations.'],['Smalltalk (1970s)','Developed a strongly object-centered style and message passing.'],['C++ (1980s)','Brought object-oriented features into a widely used systems language while retaining procedural programming.'],['Java (1995)','Popularized a managed, bytecode-based object-oriented platform for networked and cross-platform software.'],['Modern practice','Languages such as C#, Java and Python support object-oriented styles; many teams also combine functional and procedural techniques.']])}
<p>OOP grew from the need to organize increasingly complex software; it did not make earlier paradigms obsolete. Choose a design that fits the problem rather than forcing every small task into a large class hierarchy.</p>
<h3>Where OOP is useful</h3><ul><li><b>Business and enterprise systems:</b> customers, accounts, orders and payments.</li><li><b>Games and simulations:</b> players, vehicles, events and world state.</li><li><b>Mobile, desktop and web applications:</b> screens, services, models and reusable components.</li><li><b>Libraries and APIs:</b> encapsulated objects with a stable public contract.</li></ul>
<div class="box note"><b>Java fact</b>Java programs commonly use objects, but Java is not “everything is an object”: its eight primitive types (<code>int</code>, <code>boolean</code>, etc.) are not objects. Wrapper classes let primitives participate in object-based APIs.</div>
<h3>What is OOP?</h3><p>A programming paradigm that organises software around <b>objects</b> rather than functions and logic. An object bundles <b>data (attributes)</b> and <b>methods (behaviour)</b>, making programs modular, reusable, scalable and maintainable.</p>
${K(['Based on objects and classes','Improves code reusability','Programs are easier to understand and manage','Learning goals: history, evolution of paradigms, need for OOP, benefits, real-world applications'])}
<h3>Class</h3><p>A <b>blueprint/template</b> used to create objects; defines properties (data) and behaviours (methods). A Java class can contain: <b>fields, methods, constructors, blocks, nested classes</b>.</p>
<h3>Object</h3><p>An entity with <b>state and behaviour</b> (chair, bike, pen, car — physical or logical/intangible, e.g. a banking system). An object is an <b>instance of a class</b>, a real-world entity, and a <b>runtime entity</b>.</p>
${T(['Characteristic','Meaning'],[['State','Data/values of the object'],['Behaviour','Functionality, e.g. deposit, withdraw'],['Identity','Unique ID used internally by the JVM; not visible to the user']])}
${C(`class Student {            // class = blueprint
  int id; String name;      // state
  void study() { System.out.println(name + " studies"); }  // behaviour
}
public class Main {
  public static void main(String[] a) {
    Student s = new Student();   // object = instance
    s.id = 1; s.name = "Disha"; s.study();
  }
}`)}
${R('Data members = instance variables = attributes (belong to the object). Member functions work on a particular object. Nothing can be called without an object (except static). The <b>dot operator</b> accesses members.')}
<h3>The four pillars</h3>
<h5>Abstraction</h5><p>Hide implementation details, show only essential features — focus on <i>what</i> an object does, not <i>how</i>. Example: ATM, coffee machine, sending an SMS. Hides complexity, improves maintainability, gives flexibility/loose coupling via abstract classes and interfaces.</p>
<h5>Encapsulation</h5><p>Wrapping data and methods into one unit (class) and restricting direct access. Data members are <code>private</code>; access via public <b>getters/setters</b>. Gives security, maintainability, controlled access.</p>
${C(`class Account {
  private double balance;                       // hidden
  public double getBalance() { return balance; }
  public void setBalance(double b) { if (b >= 0) balance = b; }
}`)}
<h5>Polymorphism</h5><p>“Many forms” — same method, different behaviour depending on context/object (e.g. <code>speak()</code> gives Bark, Meow, Moo). Two types: <b>compile-time</b> (method overloading) and <b>runtime</b> (method overriding).</p>
<h5>Inheritance</h5><p>One class acquires fields and methods of another using <code>extends</code>; an <b>IS-A</b> relationship. Superclass = parent, subclass = child. Promotes reuse and cuts redundancy (“DRY — Don’t Repeat Yourself”).</p>
<h3>OOP vs Procedural (POP)</h3>
${T(['Key','OOP','POP'],[['Definition','Uses classes and objects to model the real world; easy to maintain/modify via inheritance','Step-by-step approach; program split into functions'],['Approach','Divided into objects (instances of classes)','Divided into functions'],['Access modifiers','private, public, protected exist','None'],['Security','Data hiding via abstraction → more secure','Less secure'],['Complexity','Modular, less complex, easy to extend','Hard to add data without revising the whole program']])}
<h3>Core benefits</h3>${K(['<b>Encapsulation</b> – data protection (private + getters/setters)','<b>Inheritance</b> – reusability, DRY','<b>Polymorphism</b> – flexibility: one <code>render()</code> draws circle/square/triangle','<b>Abstraction</b> – complexity reduction; only essential interfaces exposed'])}`},
{g:'1 · Foundations',id:'java-intro',t:'Introduction to Java',h:`
<h3>About Java</h3><ul><li>A high-level, robust, secure, object-oriented language <b>and</b> a platform.</li><li>Developed by <b>Sun Microsystems</b> (now Oracle) in <b>1995</b>; <b>James Gosling</b> is the “father of Java”. Earlier name: <b>Oak</b>.</li></ul>
${R('Features: Simple, Object-Oriented, Portable, Platform independent, Secured, Architecture neutral, Interpreted, Multithreaded (also robust, dynamic, high-level).')}
<h3>Java milestones</h3>${T(['Year','Development'],[['1990','Sun starts “Green Project” (head: James Gosling) for electronic devices'],['1991','Explored C++ with updates; new language named “Oak”'],['1992','Demonstrated controlling home appliances with a handheld device'],['1993','World Wide Web appears; team builds Web applets that run on any computer'],['1994','“HotJava” browser built to run applets'],['1995','Oak renamed Java (failed legal registration); Netscape/Microsoft support it'],['1996','Established as the language for Internet programming and a general-purpose OO language'],['1997+','Class libraries, community effort, standardisation, Enterprise Java, clustering']])}
<h3>Compiled <i>and</i> interpreted</h3><p>Source code (<code>.java</code>) is compiled by <code>javac</code> into <b>bytecode</b> (<code>.class</code>), which the interpreter (JVM) runs. In C, source → compiler → object code (<code>.o</code>) → linker → executable (<code>a.out</code>), which is platform-specific. Java combines the <b>power of compiled languages</b> with the <b>flexibility of interpreted ones</b>.</p>
${N('<b>Platform independence:</b> the compiler output (bytecode) is the same for all platforms; there is one interpreter (JVM) per system (Windows, Mac, Solaris…). “Write once, run anywhere.”')}
<h3>First program &amp; running it</h3>${C(`public class Simple {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}`)}<p>Compile: <code>javac Simple.java</code> &nbsp;→ Run: <code>java Simple</code> (class name, no <code>.class</code> extension).</p>
<h3>What happens at runtime?</h3><p>Class Loader → Bytecode Verifier → Interpreter executes bytecode → makes calls to the underlying hardware.</p>
<h3>JDK, JRE, JVM</h3>${T(['','What it is'],[['JDK','Development Kit: development tools + JRE. Develop <i>and</i> run'],['JRE','Runtime Environment: only runs Java programs (for end-users)'],['JVM','Virtual Machine: inside both JDK and JRE; executes bytecode line by line (the interpreter)']])}${R('JDK ⊃ JRE ⊃ JVM. JDB is the tool used to find and fix bugs.')}
<h3>Java vs C++</h3><p>Java overlaps with C and C++ in syntax but is “better” in being <b>safe</b>: no global variables, no direct pointers, automatic garbage collection, platform independent, built-in multithreading.</p>
<h3>Types of errors</h3>${T(['Error','Meaning'],[['Syntax / compile error','Caught at compile time; compiler does not understand/allow it'],['Runtime error','Something bad at runtime; Java splits these into Errors and Exceptions'],['Logic error','Compiles and runs but does not do what you intended']])}`},
{g:'2 · Java Fundamentals',id:'datatypes',t:'Data Types, Access &amp; Type Casting',h:`
<h3>Data types</h3><p>Specify the size, range and nature of data a variable stores. <b>Primitive:</b> byte, short, int, long, float, double, char, boolean (8 total). <b>Non-primitive:</b> String, Arrays, Classes, Interfaces, Objects.</p>
${T(['Type','Default','Size','Range / note'],[['boolean','false','1 bit (not JVM-defined)','true/false'],['byte','0','1 byte','-128 to 127'],['char','\\u0000','2 bytes','0 to 65,535 (Unicode)'],['short','0','2 bytes','-32,768 to 32,767'],['int','0','4 bytes','-2,147,483,648 to 2,147,483,647'],['long','0L','8 bytes','±9.22×10¹⁸'],['float','0.0f','4 bytes','~6–7 digits precision'],['double','0.0d','8 bytes','~15–16 digits precision']])}
<h3>Access specifiers</h3>${T(['Modifier','Same class','Same package','Subclass (other pkg)','Outside pkg'],[['private','✔','✘','✘','✘'],['default','✔','✔','✘','✘'],['protected','✔','✔','✔','✘'],['public','✔','✔','✔','✔']])}${N('In the same package, public, protected and default behave the same.')}
<h3>Type conversion</h3><h5>Widening (automatic)</h5><p>Smaller → bigger type when types are compatible: <code>byte → short → int → long → float → double</code> (char → int).</p>${C(`int i = 100; long l = i; float f = l;   // automatic`)}
<h5>Narrowing (explicit)</h5><p>Bigger → smaller needs a cast; data may be lost (truncation).</p>${C(`double d = 100.04; long l = (long) d; int i = (int) l;  // 100
char ch; int num = 88;
// ch = num;        // ERROR: 4 bytes into 2 bytes
ch = (char) num;`)}
<h5>Type promotion in expressions</h5><ul><li>byte, short, char operands are promoted to <b>int</b>.</li><li>If one operand is long/float/double, whole expression is promoted to that type.</li></ul>${C(`byte b = 50;
// b = b * 2;          // compile error (result is int)
b = (byte)(b * 2);     // -100 (overflow)`)}
${R('Truncation = floating-point assigned to an integer type. Automatic conversion needs destination <b>larger</b> than source.')}
<h3>Pre/post increment</h3>${C(`int i = 3;
int a = i++;   // a = 3, i = 4   (use, then increment)
int b = ++a;   // b = 4, a = 4   (increment, then use)`)}
<h3>Exam traps</h3>
${Q(`byte x = 127; x++; x++; System.out.print(x);`,'<b>-127</b> (overflow wraps around)')}
${Q(`short x = 10; x = x * 5;`,'<b>Compile error</b> – int result into short.')}
${Q(`double a=295.04; int b=300; System.out.println((byte)a+" "+(byte)b);`,'<b>39 44</b>')}
${Q(`char c1='D'; char c2=84; c2++; c1++; System.out.println(c1+" "+c2);`,'<b>E U</b>')}
${Q(`int i = 11; i = i++ + ++i; System.out.println(i);`,'11 + 13 = <b>24</b>')}
${Q(`int a=11,b=22,c; c = a+b+a++ + b++ + ++a + ++b;`,'<b>a=13, b=24, c=103</b>')}
${Q(`int i=0; i = i++ - --i + ++i - i--;`,'<b>0</b>')}
<p><b>Compile errors:</b> <code>boolean b=true; b++;</code> · <code>int j = --(i++);</code> · <code>int x = ++10;</code> · <code>while(y--)</code> with int y (needs boolean). <code>int ch='A'; System.out.println(ch++);</code> prints <b>65</b>. <code>int x=5; x*=(3+7);</code> gives 50.</p>
<p>Other quiz facts: float = 32 bit, double = 64 bit; 8 primitives; default boolean = false; short range −32768..32767; method with no return type uses <code>void</code>; parameters/local variables live on the <b>stack</b>; objects on the <b>heap</b>; <code>static</code> makes a variable belong to the class; pointers are <b>not</b> a Java feature.</p>`},
{g:'2 · Java Fundamentals',id:'operators',t:'Operators',h:`
<p>An operator is a symbol that performs an operation. Eight kinds: <b>Unary, Arithmetic, Relational, Ternary, Assignment, Bitwise, Logical, Shift</b>.</p>
${T(['Group','Operators','Notes'],[['Unary','+ − ! ++ −−','++/−− can be pre or post'],['Arithmetic','+ − * / %','% returns remainder'],['Relational','< > <= >= == !=','return boolean; also called equality operators'],['Logical','&amp;&amp; || !','short-circuit AND/OR, NOT'],['Assignment','= += −= *= &amp;= |= ^= <<= >>=','compound forms'],['Bitwise','&amp; | ^ ~','work bit by bit on integers'],['Shift','<< >> >>>','>>> fills with 0 (unsigned)'],['Ternary','? :','shorthand if-else']])}
<h3>Bitwise operators</h3><p>Used for manipulating individual bits: AND (&amp;), OR (|), XOR (^), Complement (~, unary, flips every bit).</p>
${T(['A=1010, B=1100','Result'],[['A &amp; B','1000 = 8'],['A | B','1110 = 14'],['A ^ B','0110 = 6'],['~A','…0101 = −11 (~x = −(x+1))'],['A << 2','101000 = 40'],['A >> 1','0101 = 5']])}
<h3>Shift operators</h3><p><code>a << n</code> = a × 2ⁿ; <code>a >> n</code> = a ÷ 2ⁿ (sign preserved); <code>a >>> n</code> fills vacated left bits with 0.</p>${C(`10<<2 = 40   10<<3 = 80   20<<2 = 80   15<<4 = 240
10>>2 = 2    20>>2 = 5    20>>3 = 2`)}
${N('Bitwise precedence (highest → lowest): <code>~</code>, shifts, <code>&amp;</code>, <code>^</code>, <code>|</code>. Precedence and associativity decide evaluation order in mixed expressions.')}
<h3>Advantages of bitwise operators</h3>${K(['<b>Speed</b> – operate directly on binary','<b>Space optimisation</b> – store many values in one variable','<b>Bit manipulation</b> – cryptography, error detection, compression','<b>Code simplification</b> – fewer conditions and loops'])}
<h3>Predict the output</h3>
${Q(`byte z=16; int x = z << 3;   // and z >> 3`,'<b>128</b> and <b>2</b>; z stays 16.')}
${Q(`int a=5,b=7;  a&b, a|b, a^b, ~a, then a&=b`,'<b>5, 7, 2, -6</b>, then a = <b>5</b>')}
${Q(`int n1=4,n2=8; &, |, ^, ~n1, n1<<2, n1>>2, n1>>>2`,'<b>0, 12, 12, -5, 16, 1, 1</b>')}
${Q(`int x=20; y=(x>5)?2:10; y=(x==25)?20:30;`,'<b>y = 2</b> then <b>y = 30</b>')}
${Q(`int var1=42; var2=~var1;`,'<b>42 -43</b> (option c)')}
${Q(`int a=3,b=6; a|b and a&b`,'<b>7 2</b>')}
${Q(`byte x=64; int i = x<<2; byte y=(byte)(x<<2);`,'<b>256 0</b> (option d)')}
${Q(`int a=1,b=2,c=3; a|=4; b>>=1; c<<=1; a^=c;`,'<b>3 1 6</b>')}
<p>Not a bitwise operator: <code><=</code>. Operator that inverts all bits: <code>~</code>.</p>`},
{g:'2 · Java Fundamentals',id:'control',t:'Decision Making &amp; Loops',h:`
<h3>Decision-making statements</h3><p>Let a program choose different paths based on conditions — used for validation, logic and user-driven actions.</p>
<h5>if</h5>${C(`int i = 10;
if (i < 15) { System.out.println("Condition is True"); }`)}
<h5>if-else</h5>${C(`if (i < 15) System.out.println("i is smaller than 15");
else System.out.println("i is greater than 15");`)}
<h5>nested-if</h5><p>Outer condition is checked first; if true, inner is checked; then program continues after the structure.</p>${C(`if (i < 15) {
  System.out.println("smaller than 15");
  if (i == 10) System.out.println("exactly 10");
}`)}
<h5>if-else-if ladder</h5><p>Conditions are checked top to bottom; the <b>first true</b> block runs and the rest are skipped; <code>else</code> runs if none match.</p>${C(`if (i == 10) ...; else if (i == 15) ...; else if (i == 20) ...; else ...;`)}
<h5>switch</h5>${C(`switch (num) {
  case 5:  System.out.println("It is 5");  break;
  case 20: System.out.println("It is 20"); break;
  default: System.out.println("Not present");
}`)}
${K(['Expression is compared with each case label; matching case executes','<code>break</code> exits the switch','No <code>break</code> → <b>fall-through</b> into the next cases','No match → <code>default</code> (optional)','Allowed types: byte, short, int, char, enum, and <b>String (JDK 7+)</b>','<b>Duplicate case values not allowed</b>'])}
<h5>Ternary operator</h5>${C(`condition ? expression_if_true : expression_if_false;
int max = (a > b) ? a : b;`)}
<h3>Loops</h3>
<h5>for</h5><p>Four parts: <b>initialization</b> (once), <b>condition</b> (checked each time, boolean), <b>increment/decrement</b>, and the <b>statement</b>. Initialization, condition and update are each optional.</p>${C(`for (initialization; condition; increment/decrement) {
  // code
}`)}
<h5>Nested for (patterns)</h5><p>The inner loop runs completely for every iteration of the outer loop.</p>${C(`for (int i = 1; i <= 5; i++) {        // * 
  for (int j = 1; j <= i; j++)        // * *
    System.out.print("* ");           // * * *
  System.out.println();
}
// Inverted: for(int j=term; j>=i; j--) with term=6`)}
<h5>for-each</h5><p>Traverses arrays/collections by element, not index.</p>${C(`int arr[] = {12, 23, 44, 56, 78};
for (int x : arr) System.out.println(x);`)}
<h5>while (entry-controlled)</h5>${C(`int i = 1;
while (i <= 10) { System.out.println(i); i++; }`)}
<h5>do-while (exit-controlled)</h5><p>Condition is checked <b>after</b> the body, so it runs <b>at least once</b>.</p>${C(`int i = 1;
do { System.out.println(i); i++; } while (i <= 10);`)}
<h3>Control flow</h3>${T(['Statement','Effect'],[['break','Terminates the loop/switch'],['continue','Skips the rest of this iteration, goes to next'],['return','Exits the method (optionally with a value)']])}
${N('The do-while with <code>count&lt;10</code> starting at 0 prints exactly <b>10</b> times.')}`},
{g:'3 · Core OOP Building Blocks',id:'strings-arrays',t:'Strings &amp; Arrays',h:`
<h3>The String class</h3><p>In Java a String is an <b>object</b> representing a sequence of characters (<code>java.lang.String</code>), stored in UTF-16 (16 bits per char). Strings are <b>immutable</b>. <code>String</code>, <code>StringBuffer</code>, <code>StringBuilder</code> all implement the <b>CharSequence</b> interface.</p>
<h5>Creating strings</h5>${C(`String s1 = "Welcome";              // literal → string constant pool
String s2 = "Welcome";              // reuses the pooled object, no new instance
String s3 = new String("Welcome");  // 2 objects: one in heap + literal in pool
char[] ch = {'j','a','v','a'};
String s4 = new String(ch);         // from char array`)}
${R('Literal: JVM checks the <b>string constant pool</b> first. <code>new String("x")</code> creates a new object in normal heap memory <i>and</i> a literal in the pool (1 reference + 2 objects).')}
<h3>Immutability</h3>${C(`String s = "Sachin";
s.concat(" Tendulkar");
System.out.println(s);            // Sachin  (new object created but not assigned)
s = s.concat(" Tendulkar");       // Sachin Tendulkar (s now points to the new object)`)}
<p><b>Why immutable?</b> Many references can share one pooled object, so a change through one would affect all. Benefits: ClassLoader safety, thread safety, security (usernames, passwords), heap/pool space efficiency.</p>
<h3>Comparing strings</h3>${T(['Method','Compares'],[['equals()','Content (case-sensitive); equalsIgnoreCase() ignores case'],['==','<b>References</b>, not values'],['compareTo()','Lexicographic: 0 if equal, positive if first > second, negative if first < second']])}${C(`String s1="Sachin", s2="Sachin", s3=new String("Sachin");
s1.equals(s3);   // true
s1 == s2;        // true  (same pool object)
s1 == s3;        // false (different objects)
"Sachin".compareTo("Ratan");   // positive (S - R = 1)`)}
<h3>Useful String methods</h3>${T(['Method','Purpose / example'],[['<code>length()</code>','Number of UTF-16 code units; <code>"Java".length()</code> is 4.'],['<code>charAt(i)</code>','Character at zero-based index <code>i</code>; out-of-range index throws <code>IndexOutOfBoundsException</code>.'],['<code>substring(begin, end)</code>','Slice from begin (inclusive) to end (exclusive).'],['<code>indexOf(value)</code>','First matching index, or <code>-1</code> if not found.'],['<code>contains(text)</code>','Whether the text occurs in the string.'],['<code>startsWith()</code> / <code>endsWith()</code>','Check a prefix or suffix.'],['<code>replace(old, new)</code>','Return a new string with matching characters/sequences replaced.'],['<code>trim()</code> / <code>strip()</code>','Return text without surrounding whitespace; <code>strip()</code> uses Unicode whitespace (Java 11+).'],['<code>toUpperCase()</code> / <code>toLowerCase()</code>','Return a case-converted string; case conversion is locale-sensitive.'],['<code>split(regex)</code>','Split using a regular expression and return a <code>String[]</code>.']])}${C(`String text = "Java programming";
System.out.println(text.length());              // 16
System.out.println(text.substring(5, 16));      // programming
System.out.println(text.indexOf("program"));    // 5
System.out.println(text.contains("Java"));      // true
System.out.println("Java".replace('a', 'o'));   // Jovo
String[] words = "red,green,blue".split(",");`)}<div class="box note"><b>Substring rule</b>For <code>substring(start, end)</code>, start is included and end is excluded; the result has <code>end - start</code> characters. A bad range throws an index exception. Use <code>equals()</code>, not <code>==</code>, when comparing string contents.</div>
<h3>Concatenation</h3><p>Two ways: <code>+</code> operator and <code>concat()</code>. <code>+</code> also joins primitives, evaluated left to right.</p>${Q(`String s = 50+30+"Sachin"+40+40;`,'<b>80Sachin4040</b>')}
<h3>StringBuffer &amp; StringBuilder</h3><p>Both create <b>mutable</b> strings. StringBuffer is synchronized (thread-safe); StringBuilder (JDK 1.5+) is <b>non-synchronized</b> and faster. Constructors: empty (capacity <b>16</b>), from a String, from an int capacity.</p>
${T(['String','StringBuffer'],[['Immutable','Mutable'],['Slow, more memory when concatenating a lot (new instance each time)','Fast, less memory for concatenation'],['Overrides equals() — compares content','Does not override equals()'],['Uses string constant pool','Uses heap memory']])}
<p>Common mutable operations include <code>append()</code>, <code>insert()</code>, <code>replace()</code>, <code>delete()</code>, <code>reverse()</code>, <code>length()</code> and <code>capacity()</code>. They modify and return the same buffer, so chained calls are possible.</p>${C(`StringBuilder builder = new StringBuilder("Java");
builder.append(" OOP").insert(0, "Learn ");
builder.replace(0, 5, "Study");
System.out.println(builder);        // Study Java OOP
System.out.println(builder.length());
System.out.println(builder.capacity());`)}<div class="box key"><b>Which one should I choose?</b>Use <code>String</code> for fixed text and ordinary values; <code>StringBuilder</code> for repeated edits in one thread; <code>StringBuffer</code> when synchronized mutable text is specifically required.</div>
<h3>toString()</h3><p>Returns the string representation of an object; <code>println(obj)</code> calls it internally. Default output is like <code>Student@1fee6fc</code>; override it for meaningful output.</p>${C(`class Student {
  int rollno; String name; String city;
  Student(int r, String n, String c) { rollno=r; name=n; city=c; }
  public String toString() { return rollno + " " + name + " " + city; }
}`)}
<h3>Arrays</h3><p>A fixed-length, indexed sequence of values of one element type. A Java array is an <b>object</b> (inherits Object), index starts at 0, size via <code>length</code>. Anonymous arrays are supported (not in C/C++).</p>${C(`int[] a;  int []b;  int c[];          // valid declarations
int a1[] = new int[5];                    // size required with new
int[] n = {33, 3, 4, 5};                  // literal init
for (int i = 0; i < a1.length; i++) System.out.println(a1[i]);`)}
${N('The JVM specification does not promise a physical memory layout for array elements. A quiz asking for an array’s total bytes must specify whether to include the runtime object header and alignment.')}
<h5>Passing arrays &amp; anonymous arrays</h5><p>Only the array name (base address/reference) is passed.</p>${C(`static void min(int arr[]) { /* ... */ }
min(new int[]{10, 22, 44, 66});   // anonymous array`)}
<h5>Multidimensional</h5>${C(`int[][] arr = new int[3][3];   // only the first dimension is mandatory`)}
<h3>Linked lists</h3><p>A linked list stores values in separate <b>nodes</b>. Each node holds data and a reference to the next node; the list begins at a <code>head</code>, and the final node points to <code>null</code>. Unlike an array, nodes are not stored in one contiguous block and the list can grow without choosing a fixed length first.</p>${C(`class Node {
  int value;
  Node next;
  Node(int value) { this.value = value; }
}

class IntLinkedList {
  private Node head;

  void addFirst(int value) {
    Node node = new Node(value);
    node.next = head;
    head = node;
  }

  void printAll() {
    for (Node current = head; current != null; current = current.next) {
      System.out.println(current.value);
    }
  }
}`)}${T(['Operation','Array','Singly linked list'],[['Read item by index','O(1)','O(n) traversal'],['Insert/remove at the front','O(n) to shift items','O(1) when the head is known'],['Memory','Elements + array capacity','Node data + link references']])}<div class="box note"><b>Java library note</b><code>java.util.LinkedList</code> is a built-in doubly linked implementation of <code>List</code> and <code>Deque</code>. The node example above teaches the structure; it is not the same implementation. For frequent indexed access, an <code>ArrayList</code> is usually a better fit.</div>
<h3>String &amp; array traps</h3>
<ul><li><code>int arr[2];</code> → compile error (size can’t be in declaration).</li><li><code>System.out.print(arr)</code> → <code>[I@hashcode</code> (class@hex hash).</li><li><code>arr1 == arr2</code> → “Not same”; <code>Arrays.equals(arr1, arr2)</code> → “Same”.</li><li>Default values: ints 0, objects null.</li><li>Loop with extra <code>i++</code> inside prints <b>0 2 4 6 8</b>.</li><li><code>"I LIKE JAVA"</code>: <code>charAt(3)</code> = <b>K</b>, <code>length()</code> = <b>11</b>.</li><li><code>"hello".equals("world")</code> false; equals("hello") true; <code>"I"+"like"+"Java"</code> = IlikeJava.</li><li>Empty string: <code>""</code> or <code>new String()</code>. Method for char at index: <code>charAt()</code>.</li><li><code>k=arr[i++ + ++i-1]</code> with {2,3,4,5,6}, i=1 → <b>5 3</b>.</li></ul>`},
{g:'3 · Core OOP Building Blocks',id:'constructors',t:'Constructors',h:`
<h3>Need &amp; definition</h3><p>Objects need initial values at creation. A <b>constructor</b> is a special member whose name equals the class name; it initialises the object when created. Every <code>new</code> calls at least one constructor.</p>
<h3>Rules</h3>${K(['Same name as the class','<b>No return type</b> (not even void)','Invoked automatically when an object is created','Not inherited','Cannot be <code>static</code>, <code>abstract</code> or <code>final</code>','If you write none, the compiler adds a default no-arg constructor','Parent constructor call (<code>super()</code>/<code>this()</code>) must be the <b>first line</b>'])}
${N('Adding any constructor with parameters removes the compiler-provided default one. <code>new Point()</code> then fails with a compile error unless you write a no-arg constructor.')}
<h3>Types</h3>${C(`class Student {
  int id; String name;
  Student() { id = 0; name = "NA"; }                    // default (no-arg)
  Student(int i, String n) { id = i; name = n; }        // parameterized
  Student(Student s) { id = s.id; name = s.name; }      // copy constructor
}`)}<p>The copy constructor copies the values of an existing object into the new one at creation. Constructors can be <b>overloaded</b> (polymorphism principle).</p>
<h3>Constructor chaining</h3><p>Calling one constructor from another <b>of the same class</b> with <code>this()</code>.</p>${C(`Point() { this(10, 10); }
Point(int x, int y) { m_x = x; m_y = y; }`)}
<h3>Singleton class (private constructor)</h3><p>A class that can have at most one object. Make the constructor <b>private</b> and expose the object through a <b>static method</b>.</p>${C(`class Single {
  private static Single obj;
  private Single() {}
  static Single get() { if (obj == null) obj = new Single(); return obj; }
}`)}
<h3>Anonymous (instance) block</h3><p>Nameless block <code>{ ... }</code> holding statements common to all constructors. The compiler moves it to the beginning of <b>each</b> constructor, so it runs before the constructor body.</p>
${R('Order: <b>static blocks</b> (once, at class loading, in written order) → <b>instance blocks</b> → <b>constructor</b>, for every object.')}
<h3>Practice</h3>
${Q(`public class Main {
 { System.out.println("1"); }
 static { System.out.println("2"); }
 Main() { System.out.println("3"); }
 static { System.out.println("4"); }
 { System.out.println("5"); }
 public static void main(String[] a){ new Main(); System.out.println("6"); }
}`,'<b>2 4 1 5 3 6</b>')}
${Q(`static x=10; static{x++;} static{++x;} {x--;}   // 3 objects created`,'<b>9</b> (12 − 3). Static blocks run once, instance block 3 times.')}
${Q(`Test() prints1, new Test(10) prints2, new Test(10,20) prints3, then 4, then 5`,'<b>12345</b> – each constructor prints its digit, creates the next object, then prints its closing digit.')}
<ul><li>Class with <code>void TestingConstructor()</code> and <code>TestingConstructor()</code> → constructor runs: <b>Antarctica</b> (method with class name is just a method).</li><li><code>private Helper()</code> used from another class → <b>compile error</b>.</li><li><code>this(20)</code> in no-arg → <b>Birds=20</b>.</li><li><code>new Constructor7(50.5f)</code> → <b>Pen=50.5</b>.</li><li>Default constructor of <code>public class Test{}</code> is <code>public Test()</code>; it initialises default values.</li><li>Object memory is allocated at <b>run time</b> (with <code>new</code>), not at compile time.</li><li>Printing an object of an empty class prints <code>demo@hash</code>.</li></ul>`},
{g:'3 · Core OOP Building Blocks',id:'this',t:'The this Keyword',h:`
<p><code>this</code> is a reference variable that refers to the <b>current object</b>. Six uses:</p>
${K(['Refer to the current class instance variable','Invoke the current class method (implicitly)','<code>this()</code> invokes the current class constructor','Pass as an argument in a method call','Pass as an argument in a constructor call','Return the current class instance'])}
<h5>1. Distinguish instance variable from parameter</h5>${C(`class Student {
  int rollno; String name; float fee;
  Student(int rollno, String name, float fee) {
    this.rollno = rollno; this.name = name; this.fee = fee;
  }
}`)}<p>If parameters have different names (<code>r, n, f</code>), <code>this</code> is <b>not required</b>.</p>
<h5>2. Invoke current class constructor</h5>${C(`A() { System.out.println("hello a"); }
A(int x) { this(); System.out.println(x); }   // hello a, then 10`)}
<h5>3. Pass as argument (method / constructor)</h5>${C(`void p() { m(this); }          // method
A4() { B b = new B(this); b.display(); }   // constructor`)}
<h5>4. Return current instance</h5>${C(`A getA() { return this; }
new A().getA().msg();       // method chaining`)}
${N('<code>System.out.println(this)</code> prints the same hash as the object reference (<code>A5@22b3ea59</code>) – proof that <code>this</code> is the current object.')}
<h3>Practice</h3>${Q(`int a=100,b=200; void calculate(int a,int b){ System.out.println(a+b); }  // calculate(20,30)`,'<b>50</b> (local parameters shadow fields)')}
${Q(`int a=500,b=300; void sum(int a,int b){ System.out.println(this.a+this.b); } // sum(45,60)`,'<b>800</b>')}
${Q(`int breadth,height; void Area(int breadth,int height){ println(this.breadth*this.height); }`,'<b>0</b> (fields default to 0)')}
${Q(`int a=2; void Shift(int a){ println(this.a<<a); }  // Shift(4)`,'2 << 4 = <b>32</b> (option a)')}`},
{g:'3 · Core OOP Building Blocks',id:'static',t:'The static Keyword',h:`
<p><code>static</code> is mainly for <b>memory management</b>; it belongs to the <b>class</b>, not instances. Applies to <b>variables, methods, blocks</b> (and nested classes).</p>
<h3>Static variable (class variable)</h3><p>Common property shared by all objects (company name, college name). Gets memory <b>once</b> in the class area at class loading → memory efficient.</p>${C(`class Student {
  int rollno; String name;
  static String college = "ITS";   // shared
}`)}
${Q(`// without static: int count; Student(){ count++; println(count); } × 3 objects`,'<b>1 1 1</b> – each object has its own copy.')}${Q(`// with static int count; × 3 objects`,'<b>1 2 3</b> – one shared copy.')}
<h3>Static method (class method)</h3><ul><li>Belongs to the class; call without an object: <code>Calculate.cube(5)</code>.</li><li>Can access/change static data directly.</li><li><b>Cannot</b> use non-static members directly, and cannot use <code>this</code> or <code>super</code>.</li></ul>
<h3>Static block</h3><p>Initialises static data; runs <b>once</b> at class loading, <b>before main</b>. Not allowed inside a method.</p>${C(`class A2 { static { System.out.println("static block"); }
  public static void main(String[] a){ System.out.println("Hello main"); } }
// static block
// Hello main`)}${N('Running a class without <code>main()</code> using a static block worked only up to JDK 1.6. From <b>JDK 1.7 it is not possible</b>.')}
<h3>Traps</h3>
${Q(`class Test1 { static int x=10; main(){ Test1 t1=new Test1(), t2=new Test1(); t1.x=20; print(t1.x+" "); println(t2.x);} }`,'<b>20 20</b>')}
${Q(`class access{ static int x; void increment(){x++;} }  obj1.x=0; obj1.increment(); obj2.increment(); print obj1.x+" "+obj2.x`,'<b>2 2</b>')}
${Q(`static{int x=10; print(x+" ");}  main{int x=20; println(x);}`,'<b>10 20</b> (static block first)')}
<ul><li>Static method accessing <code>private int x</code> (instance) → <b>compile error</b>; through an object <code>obj.x</code> → works (10).</li><li><code>static int a=20; Myclass(){a=200;}</code> with <code>new Myclass()</code> → 200; without creating an object, 20.</li><li>Three objects then <code>obj3.m1()</code> (a++): 20+3+1 = <b>24</b>.</li><li>Static method calling instance <code>m1()</code> → compile error; <code>new Test(null)</code> → Static method, Instance method, Constructor.</li><li>Overloading with same signature, one static and one instance → <b>compile error</b>.</li><li>Statement “each object contains its own copy of static variables” is <b>incorrect</b>.</li></ul>
<h3>Interview questions (answers)</h3>${T(['Question','Answer'],[['When does a static variable get memory?','At class loading, once'],['Where stored?','Class (method) area'],['Static local variable?','Not allowed'],['Static top-level class?','No (only nested classes)'],['Access static members without an object?','Yes, via class name'],['Instance vs static?','Instance: per object (heap); static: per class'],['Why also called class method?','Belongs to class, called with class name'],['Instance method → static member?','Yes. Static → instance directly: no'],['Static method in interface?','Yes (Java 8+)'],['this/super in static method?','No'],['Overload static methods?','Yes'],['Override static methods?','No (method hiding)'],['Why static block before main?','Runs at class load, before main executes']])}`},
{g:'4 · Memory &amp; Utility Classes',id:'gc',t:'Garbage Collection',h:`
<p>In C/C++ the programmer creates <i>and</i> destroys objects; forgetting causes memory shortage. In Java the <b>Garbage Collector (GC)</b> destroys unused objects automatically. It is a <b>daemon thread</b> always running in the background; its goal is to free <b>heap</b> memory by destroying unreachable objects.</p>
${T(['Term','Meaning'],[['Unreachable object','Has no reference to it (objects in an “island of isolation” are also unreachable)'],['Eligible for GC','Object is unreachable']])}
<h3>Ways to make an object eligible</h3>${C(`Employee e = new Employee();
e = null;                        // 1. nullify the reference
Employee e1 = new Employee(), e2 = new Employee();
e1 = e2;                         // 2. re-assign the reference
new Employee();                  // 3. anonymous object
// 4. object created inside a method (unreachable when method ends)`)}
<h3>Requesting GC</h3><p>An eligible object is not destroyed immediately — only when the JVM runs GC. You can <b>request</b> it: <code>System.gc()</code> or <code>Runtime.getRuntime().gc()</code> (equivalent). <b>No guarantee</b> it will run.</p>
<h3>finalize()</h3><p>Called by GC just before destroying an object, for cleanup (e.g. closing a DB connection). Prototype in Object: <code>protected void finalize() throws Throwable</code>.</p>${C(`public class TestGarbage1 {
  public void finalize() { System.out.println("object is garbage collected"); }
  public static void main(String[] a) {
    TestGarbage1 s1 = new TestGarbage1(), s2 = new TestGarbage1();
    s1 = null; s2 = null; System.gc();
  }
}`)}
${R('Called by the Garbage Collector (a JVM module), not by the JVM directly · Object’s version is empty · <b>never invoked more than once</b> per object · uncaught exception in finalize() is ignored · GC collects only objects created with <code>new</code>.')}
<h3>Advantages</h3>${K(['Memory efficient – removes unreferenced objects from heap','Automatic – no extra effort'])}
<p><b>Real-life use:</b> count live Employee objects (excluding interns) by incrementing a static counter in the constructor and decrementing it in <code>finalize()</code>.</p>
<h3>Practice &amp; quiz facts</h3><ul><li>Method <code>m1()</code> creating t1 and t2 locally → <b>2</b> objects eligible after it returns.</li><li>t1, then t2=m1(t1) (returns a new object), t3=new, <code>t2=t3</code> → <b>1</b> eligible object after line 8 (the object t2 pointed to).</li><li>New objects are allocated in the <b>Young space</b>. GC technique: <b>Mark and sweep</b>.</li><li>Minor GC = young generation (frequent, short-lived); Major GC = old generation (less frequent, long-lived). Both A, B, C statements are true.</li></ul>`},
{g:'4 · Memory &amp; Utility Classes',id:'wrapper',t:'Wrapper Classes',h:`
<p>Wrapper classes let primitives be treated as <b>objects</b> so they can be used in collections, generics and APIs needing objects.</p>
${T(['Primitive','Wrapper'],[['byte','Byte'],['short','Short'],['int','Integer'],['long','Long'],['float','Float'],['double','Double'],['char','Character'],['boolean','Boolean']])}
<h3>Why needed</h3>${K(['Collections (ArrayList, HashMap) store only <b>objects</b>','Needed for synchronization, serialization and methods requiring objects','Objects can be <code>null</code>; primitives cannot','Utility methods: <code>compareTo()</code>, <code>equals()</code>, <code>toString()</code>'])}
<h3>Autoboxing &amp; unboxing</h3><p><b>Autoboxing:</b> automatic primitive → wrapper (int→Integer). <b>Unboxing:</b> automatic wrapper → primitive.</p>${C(`int b = 357;
Integer a = b;                          // autoboxing
Character c = 'a';                      // char → Character
ArrayList<Integer> list = new ArrayList<>();
list.add(25);                           // autoboxing
int num = list.get(0);                  // unboxing`)}
<h3>Useful wrapper methods</h3>${T(['Operation','Example and result type'],[['Parse text to a primitive','<code>int n = Integer.parseInt("42");</code> → <code>int</code>'],['Convert text to a wrapper','<code>Integer count = Integer.valueOf("42");</code> → <code>Integer</code>'],['Format a value as text','<code>String text = Integer.toString(42);</code>'],['Compare values','<code>Integer.compare(3, 5)</code> returns a negative/zero/positive value'],['Character checks','<code>Character.isDigit(\'7\')</code>, <code>Character.toUpperCase(\'a\')</code>'],['Limits','<code>Integer.MAX_VALUE</code>, <code>Double.MIN_VALUE</code> (smallest positive non-zero double)']])}${C(`String input = "42";
int value = Integer.parseInt(input);       // primitive result
Integer object = Integer.valueOf(input);    // wrapper result
double decimal = Double.parseDouble("3.5");
String text = String.valueOf(value);
boolean yes = Boolean.parseBoolean("true");`)}
<h3>Conversion pitfalls</h3><ul><li>Invalid numeric text such as <code>Integer.parseInt("4x")</code> throws <code>NumberFormatException</code>; validate or catch it when input is untrusted.</li><li>Unboxing a <code>null</code> wrapper throws <code>NullPointerException</code>.</li><li>Wrapper objects are immutable: changing a boxed value creates/assigns another value; it does not mutate the existing object.</li><li>Compare numeric values with <code>equals()</code> or primitive values—not <code>==</code>, which tests reference identity for wrapper objects.</li></ul>
${Q(`Integer a = null; int n = a;`,'<b>NullPointerException</b> during automatic unboxing.')}
${Q(`Integer.parseInt("101")`,'Primitive <b>int 101</b>.')}
${N('Generics and standard collections use reference types, so use <code>ArrayList&lt;Integer&gt;</code>, not <code>ArrayList&lt;int&gt;</code>. Java automatically boxes/unboxes at many assignment, argument and return boundaries.')}`},
{g:'5 · Inheritance &amp; Polymorphism',id:'inheritance',t:'Inheritance &amp; super',h:`
<h3>Definition</h3><p>A mechanism where one class acquires properties and behaviour of another (<b>IS-A</b>, parent-child). Reusability: reuse fields/methods of an existing class when creating a new one.</p>
${T(['Term','Also called'],[['Subclass','Derived / extended / child class'],['Superclass','Base / parent class'],['Reusability','Reuse existing fields and methods']])}
${C(`class Subclass-name extends Superclass-name {
  // methods and fields
}`)}<p><code>extends</code> means “increase the functionality”.</p>
<h3>Access in inheritance</h3>${T(['Specifier','Accessible'],[['public','Everywhere (same/different package)'],['protected','Same package + subclasses in any package'],['default','Same package only'],['private','Same class only']])}
<h3>Types of inheritance</h3>${T(['Type','Meaning','In Java'],[['Single','One subclass inherits one superclass','✔'],['Multilevel','A → B → C; a class cannot directly access the grandparent’s private members','✔'],['Hierarchical','One superclass, many subclasses','✔'],['Multiple','Many superclasses for one class','✘ with classes; ✔ via <b>interfaces</b>'],['Hybrid','Mix of types','✘ if it needs multiple inheritance of classes']])}
<h3>The super keyword</h3><p>A reference to the <b>immediate parent class object</b> (a parent instance is created implicitly when a subclass object is created). Three uses:</p>
<h5>1. Parent instance variable</h5>${C(`class EngineersAcademy { String address = "Gopalpura"; }
class Center extends EngineersAcademy {
  String address = "PratapNagar";
  void printAddress() { System.out.println(address); System.out.println(super.address); }
}`)}
<h5>2. Parent method</h5>${C(`void check() { super.RPSC_Live(); }   // calls parent's version`)}
<h5>3. Parent constructor</h5>${C(`Center() { super(10, 20); System.out.println("Default Constructor of Center"); }`)}
${R('<code>super()</code> must be the <b>first statement</b>. If you do not write it, the compiler inserts <code>super()</code> — which fails if the parent has no no-arg constructor. Parent constructor runs first (parent → child).')}
<h3>Conclusions</h3>${K(['Every class except <b>Object</b> has exactly one direct superclass (implicitly Object)','A superclass can have many subclasses; a subclass has only one superclass','Constructors are <b>not inherited</b> but can be invoked with super()','Private members are not inherited, but public/protected getters/setters can reach them'])}
<h3>Practice</h3>
${Q(`class A{ A(String s){print("A");} }  class B extends A{ B(String s){print("B");} }`,'<b>Compile error</b> – B’s implicit <code>super()</code> finds no no-arg constructor in A. Fix: <code>super(s)</code>.')}
${Q(`static{"THIRD"} in A, static{"SECOND"} in B extends A, static{"FIRST"} in C extends B;  new C();`,'<b>THIRD SECOND FIRST</b> – static blocks run parent first.')}
${Q(`B has instance block printing super.s ("Class A" field); C has block printing super.s; main prints c.s`,'<b>Class A, Class B, Class C</b>')}
<ul><li><code>super.super.Print()</code> → invalid in Java.</li><li><code>super()</code> not first line, or both <code>super()</code> and <code>this(10)</code> → compile error.</li><li>Class with only <code>A(int)</code> and subclass <code>B extends A {}</code> → error (no default).</li><li>Private final method “override” in child is a new method, not an override.</li><li><code>i++ + ++j</code> with 10, 20 → <b>31</b>.</li><li>Class Two without extends printing x → <b>1212</b>; with extends One → still <b>1212</b> (own field).</li></ul>`},
{g:'5 · Inheritance &amp; Polymorphism',id:'overloading',t:'Method Overloading',h:`
<h3>Definition</h3><p>Multiple methods in a class with the <b>same name but different parameters</b> (number, type or order). Also called <b>compile-time binding / early binding / static binding</b>. It is <b>compile-time (static) polymorphism</b>.</p>
${K(['Improves readability and reusability','Reduces complexity','Related functions with slightly different arguments','Constructors can also be overloaded'])}
<h3>Two ways</h3>${C(`static int add(int a, int b)          { return a + b; }
static int add(int a, int b, int c)   { return a + b + c; }   // number of args
static double add(double a, double b) { return a + b; }       // data type`)}
${N('Changing <b>only the return type</b> is <b>not</b> overloading → compile error. Method signature = name + number, types and order of parameters (not return type or access modifier).')}
<h3>Overloading main()</h3><p>Yes — only <code>main(String[] args)</code> is called by the JVM; others are called manually.</p>${C(`public static void main(String[] a){ main("ram"); main(); System.out.println("main with String[]"); }
public static void main(String s){ System.out.println("main with String"); }
public static void main(){ System.out.println("main without args"); }
// main with String / main without args / main with String[]`)}
<h3>Type promotion</h3><p>If no exact match is found, a smaller type is promoted: byte → short → int → long → float → double (char → int).</p>
${Q(`void add(int a,long b){println(a+b);} void add(int a,int b,int c){println(a+b+c);}  obj.add(20,20); obj.add(20,20,20);`,'<b>40</b> and <b>60</b> (second 20 promoted to long)')}
${Q(`void add(int a,int b) / void add(long a,long b);  add(70,90)`,'<b>integer will be invoked</b> – exact match preferred')}
<ul><li><code>int foo()</code> and <code>char foo()</code> → <b>Compile-time error</b>. <code>foo(int)</code> + <code>foo(int,int)</code> → prints <b>10</b> and <b>a</b>.</li><li>Compile-time polymorphism = method overloading (static binding, early binding).</li><li><code>add(int,int)</code> returning int + <code>void add(int,int)</code> → error (duplicate).</li></ul>`},
{g:'5 · Inheritance &amp; Polymorphism',id:'overriding',t:'Overriding &amp; Runtime Polymorphism',h:`
<h3>Polymorphism</h3><p>“poly” = many, “morphs” = forms: perform a single action in different ways. Two types: compile-time (overloading) and runtime (overriding).</p>
<h3>Method overriding</h3><p>A subclass provides its <b>specific implementation</b> of a method already declared in the parent. Rules: <b>same name</b>, <b>same parameters</b>, and an <b>IS-A</b> (inheritance) relationship.</p>
${R('Overriding rules: the overriding method must <b>not be more restrictive</b> in access (public → protected is an error); same return type (covariant allowed); cannot override <b>static, final or private</b> methods; cannot override <code>main</code> (static).')}
${C(`class Base { public void m1() { System.out.println("No parameter method"); } }
class derive extends Base {
  public void m1() { System.out.println("Single Int Parameter"); super.m1(); }
}`)}
<h5>Why can’t static methods be overridden?</h5><p>Static belongs to the <b>class area</b>, instance methods to the <b>object (heap)</b>. Static methods are only <i>hidden</i>.</p>
<h5>Access modifier rule</h5>${C(`class A { protected void msg() {} }
public class Simple extends A { void msg() {} }  // ERROR: default is more restrictive`)}
<h3>Runtime polymorphism (dynamic method dispatch)</h3><p>A call to an overridden method is resolved at <b>runtime</b>, using the <b>object</b> the superclass reference points to. Done through <b>upcasting</b> (parent reference = child object).</p>${C(`class A {}  class B extends A {}
A a = new B();          // upcasting`)}${C(`class Bank { float getRateOfInterest() { return 0; } }
class SBI extends Bank   { float getRateOfInterest() { return 8.4f; } }
class ICICI extends Bank { float getRateOfInterest() { return 7.3f; } }
class AXIS extends Bank  { float getRateOfInterest() { return 9.7f; } }
Bank b = new SBI(); b.getRateOfInterest();   // 8.4
b = new ICICI();    b.getRateOfInterest();   // 7.3`)}
<h3>Static vs dynamic binding</h3><p>Binding = connecting a method call to its body. <b>Static binding</b> (early): resolved at compile time by the compiler; used for <b>private, final and static</b> methods (and overloading). <b>Dynamic binding</b> (late): resolved at runtime by the JVM based on object type.</p>
${T(['Compile-time (overloading)','Runtime (overriding)'],[['Resolved by compiler','Resolved at run time'],['Static / early binding','Dynamic / late binding'],['Same name, different parameters','Same signature in parent and child'],['Faster','Slower, but more flexible'],['No inheritance needed','Inheritance involved']])}
${N('Reference type decides <i>what can be called</i> (compile time); object type decides <i>which version runs</i> (runtime). Fields are <b>not</b> polymorphic — only methods.')}
<h3>Practice</h3>
${Q(`base b = new derive();  b.show(); b.display(); b.displayderive();   // displayderive only in derive`,'show → derive version, display → base version, <code>b.displayderive()</code> → <b>compile error</b> (not in base reference type).')}
${Q(`public void show() in base; protected void show() in derive`,'<b>Compile error</b> – weaker access.')}
${Q(`B obj2; obj2.i=1; obj2.j=2; A r = obj2; r.display();  // B overrides display() printing j`,'<b>2</b>')}
${Q(`static show() in both; base b=new derive(); b.show();`,'<b>show base class</b> – static hiding. With <code>((derive)b).show()</code> → <b>show derive class</b>.')}
<ul><li>Overriding with different return type (<code>void</code> → <code>int</code>) → compile error.</li><li><code>final</code> method overridden → compile error.</li><li><code>void method(int... a)</code> vs <code>method(int[] a)</code> → duplicate (compile error).</li><li>Can protected be overridden as private? <b>No</b>.</li><li><code>methodOne(Double)</code> vs <code>methodOne(double)</code> → <b>overloading</b>, not overriding.</li><li>Chain Z→Y→X widening access (default → protected → public) is <b>valid</b>.</li></ul>`},
{g:'5 · Inheritance &amp; Polymorphism',id:'abstract',t:'Abstract Class &amp; final',h:`
<h3>Abstraction</h3><p>Hiding implementation, showing only functionality (e.g. typing and sending an SMS). Two ways: <b>abstract class (0 to 100%)</b> and <b>interface (100%)</b>.</p>
<h3>Abstract class</h3><p>Declared with <code>abstract</code>; can have abstract and non-abstract methods; must be extended and its abstract methods implemented; <b>cannot be instantiated</b>.</p>
${K(['Must be declared with <code>abstract</code>','May contain abstract and concrete methods','Cannot be instantiated','<b>Can</b> have constructors and static methods','Can have <code>final</code> methods (subclass can’t change them)'])}
${C(`abstract class Shape { abstract void draw(); }
class Rectangle extends Shape { void draw() { System.out.println("drawing rectangle"); } }
class Circle1 extends Shape   { void draw() { System.out.println("drawing circle"); } }
Shape s = new Circle1(); s.draw();     // drawing circle`)}${C(`abstract class Bike {
  Bike() { System.out.println("bike is created"); }
  abstract void run();
  void changeGear() { System.out.println("gear changed"); }
}
class Honda extends Bike { void run() { System.out.println("running safely.."); } }
// Bike obj = new Honda(); obj.run(); obj.changeGear();`)}
<h3>The final keyword</h3><p>Restricts the user; applies to variable, method, class.</p>${T(['final…','Effect'],[['variable','Value cannot change (constant)'],['method','Cannot be overridden'],['class','Cannot be inherited']])}
${C(`final int speedlimit = 90;   // speedlimit = 400; → ERROR
final void run() {}          // child override → ERROR
final class Bike {}          // class Honda extends Bike → ERROR`)}
<h5>Blank final variable</h5><p>A final variable with no value at declaration; initialised <b>only in the constructor</b>. A <b>static blank final</b> variable is initialised only in a <b>static block</b>.</p>${C(`static final int data;
static { data = 50; }`)}
<h3>Q&amp;A from the slides</h3>${T(['Question','Answer'],[['Is a final method inherited?','Yes inherited (usable) but cannot be overridden'],['Blank/uninitialized final?','Final variable with no value at declaration'],['Can we initialize it?','Yes — in the constructor (static: static block)'],['Final parameter?','Cannot be changed inside the method'],['Final constructor?','No — constructors can’t be final']])}
${Q(`final int i; i = 20; System.out.println(i);`,'<b>20</b> – valid; assigned once.')}
<p><code>final</code> use: all of — a final class can’t be subclassed, a final method can’t be overridden, a final variable assigned once (<b>D: all of the above</b>). <code>void someMethod(final int num){ num = 10; }</code> → compile error. <code>Base b = new Derived()</code> with final <code>show()</code> overridden → compile error.</p>`},
{g:'5 · Inheritance &amp; Polymorphism',id:'interface',t:'Interfaces',h:`
<h3>Definition</h3><p>An interface is a mechanism to achieve <b>abstraction</b> (and <b>multiple inheritance</b>). It also represents an <b>IS-A</b> relationship. It gives total abstraction: methods have no body.</p>
${C(`interface Name {
  // constant fields
  // abstract methods (by default)
}`)}
<h3>Rules</h3>${K(['Declared with the <code>interface</code> keyword','All methods are empty-bodied (abstract) — total abstraction','Variables are <b>public, static and final</b> by default','A class uses <code>implements</code> and <b>must implement all</b> methods','A class extends only 1 class but can implement <b>any number</b> of interfaces','Gives <b>loose coupling</b>'])}
${N('The compiler automatically adds <code>public abstract</code> before interface methods and <code>public static final</code> before data members. Implementing methods must be declared <code>public</code>.')}
<h3>Class ↔ interface relationships</h3><p>Class extends class · interface extends interface (even several) · class <b>implements</b> interface. An interface cannot extend or implement a class.</p>
${T(['Class','Interface'],[['Can instantiate variables and create objects','Cannot create objects'],['Can contain concrete (implemented) methods','No concrete methods (except default/static, Java 8)'],['private, protected, public specifiers','Only <b>public</b>']])}
${C(`interface Bank { void deposit(int x); void withdraw(int x); float roi = 7.2f; }
class SBI implements Bank {
  int amt;
  public void deposit(int x)  { amt = amt + x; }
  public void withdraw(int x) { amt = amt - x; }
}`)}
<h3>Multiple inheritance via interfaces</h3><p>A class implementing several interfaces (or an interface extending several) is multiple inheritance.</p>${C(`interface inter1 { void print(); }
interface inter2 { void show(); }
class implementer implements inter1, inter2 {
  public void print() { System.out.println("Hello"); }
  public void show()  { System.out.println("Welcome"); }
}`)}
<h3>Java 8 additions</h3><p><b>Default method</b> – has a body, so new methods can be added to old interfaces without breaking implementing classes. <b>Static method</b> – called with the interface name, no object needed.</p>${C(`interface shape {
  void draw();
  default void msg() { System.out.println("default method"); }
  static int cube(int x) { return x * x * x; }
}
shape.cube(3);   // 27`)}
<h3>Marker (tagged) interface</h3><p>An interface with <b>no members</b> (Serializable, Cloneable, Remote); gives the JVM essential information to perform a useful operation.</p>
<h3>Abstract class vs interface</h3>${T(['Abstract class','Interface'],[['Abstract + non-abstract methods','Abstract only (default/static since Java 8)'],['No multiple inheritance','Supports multiple inheritance'],['final/non-final/static/non-static variables','Only static final variables'],['Can implement an interface','Cannot implement an abstract class'],['<code>abstract</code> keyword; extended with <code>extends</code>','<code>interface</code> keyword; <code>implements</code>'],['Can extend a class and implement many interfaces','Can extend only interfaces'],['private, protected etc. members','Members public by default']])}
${R('Compile-time polymorphism (overloading) vs runtime (overriding) comparison and the rule “overriding method must not be more restrictive” also apply to interface methods — implementations must be <code>public</code>.')}`},
{g:'6 · Advanced Structure',id:'nested',t:'Nested &amp; Inner Classes',h:`
<p>A class defined <b>inside another class</b>. Groups classes used in one place (more encapsulation, readable code). Its scope is bounded by the outer class. The nested class can access all outer members (even private), but the outer class cannot directly access nested members. It is itself a member, so can be private, public, protected or default.</p>
<p>Two categories: <b>static nested class</b> and <b>inner class</b> (non-static). Inner class types: <b>Member inner, Method-local inner, Static nested, Anonymous inner</b>.</p>
${K(['<b>Encapsulation</b> – can access outer private members','<b>Code organisation</b> – logical grouping','Holds a <b>reference to the outer instance</b>','<b>Namespace management</b> – avoids name clashes'])}
<h3>Member inner class</h3>${C(`class Outer {
  private int outerVar = 100;
  class Inner { void display() { System.out.println("Outer variable: " + outerVar); } }
}
Outer.Inner inner = new Outer().new Inner();    // needs outer object
inner.display();`)}
<h3>Method-local inner class</h3><p>Defined inside a method; can only be instantiated inside that method.</p>${C(`void outerMethod() {
  class Inner { void innerMethod() { System.out.println("Inside innerMethod"); } }
  new Inner().innerMethod();
}`)}
<h3>Static nested class</h3><p>Not tied to an outer object; can only use the outer’s <b>static</b> members directly.</p>${C(`class Outer {
  private static int staticVar = 50;
  static class Inner { void display() { System.out.println("Static variable: " + staticVar); } }
}
Outer.Inner inner = new Outer.Inner();    // no outer object needed`)}
<h3>Anonymous inner class</h3><p>A nameless class defined and instantiated in one expression, usually extending a class or implementing an interface.</p>${C(`Shape s = new Shape() { void draw() { System.out.println("anonymous"); } };`)}
<h3>Static vs non-static nested</h3>${T(['Static nested','Inner (non-static)'],[['Can be created without an outer object','Needs an outer object'],['Accesses only static members of outer','Accesses static and non-static members'],['Created: <code>new Outer.Inner()</code>','Created: <code>outer.new Inner()</code>']])}`},
{g:'6 · Advanced Structure',id:'packages',t:'Packages',h:`
<p>A package is a collection of related <b>classes, interfaces and sub-packages</b> (e.g. <code>student</code>, <code>exam</code>). It organises code, avoids naming conflicts, controls access and eases maintenance.</p>
<h3>Built-in packages</h3>${T(['Package','Examples'],[['java.lang','String, Math, System, Thread'],['java.util','Scanner, ArrayList'],['java.io','File, BufferedReader'],['java.net','Networking classes']])}
<h3>Creating a user-defined package</h3>${C(`// File: Student.java
package mypack;                 // must be first, before imports/class
public class Student {
  public void display() { System.out.println("Welcome to Java Packages!"); }
}
// File: Test.java
import mypack.Student;
public class Test {
  public static void main(String[] args) { new Student().display(); }
}`)}<p>Compile &amp; run: <code>javac -d . Student.java</code> → <code>javac Test.java</code> → <code>java Test</code>. The <code>-d .</code> option places the class in the package directory.</p>
<h3>Importing</h3>${T(['Syntax','Purpose'],[['import java.util.Scanner;','One specific class'],['import java.util.*;','All accessible types in java.util'],['import mypack.Student;','User-defined class'],['java.util.Scanner sc = new java.util.Scanner(System.in);','Fully qualified name']])}${N('<code>import java.util.*</code> does <b>not</b> import classes of its sub-packages.')}
<h3>Access modifiers</h3>${T(['Modifier','Same class','Same package','Subclass, other package','Non-subclass, other package'],[['private','Yes','No','No','No'],['default','Yes','Yes','No','No'],['protected','Yes','Yes','Yes (subject to subclass rules)','No'],['public','Yes','Yes','Yes','Yes']])}
<h3>Class access vs method access</h3>${T(['Class','Method','Accessible outside package?'],[['public','protected','Yes, via inheritance'],['default','protected','No'],['public','public','Yes'],['default','public','No']])}${R('The <b>class must be accessible first</b> before its methods can be accessed; a protected/public method cannot override the restriction of a default-access class.')}
${K(['<b>Organisation</b> – groups related classes','<b>Name-conflict prevention</b> – same simple name in different packages','<b>Access control</b>','<b>Reusability</b>','<b>Maintainability</b> of large projects'])}`},
{g:'7 · Exceptions &amp; Threads',id:'exceptions',t:'Exception Handling',h:`
<p>Exception handling is a mechanism to handle <b>runtime errors</b> so the normal flow of the application is maintained. An exception is an abnormal event that disrupts normal flow — an <b>object thrown at runtime</b>.</p>
<h3>Hierarchy &amp; types</h3><p><code>Object → Throwable → Exception / Error</code>. <code>Exception</code> and <code>Error</code> are direct subclasses of <b>Throwable</b> (java.lang).</p>
${T(['Type','Description','Examples'],[['Checked','Direct subclasses of Throwable except RuntimeException and Error; checked at <b>compile time</b>','IOException, SQLException'],['Unchecked','Subclasses of RuntimeException; not checked at compile time, occur at runtime','ArithmeticException, NullPointerException, ArrayIndexOutOfBoundsException'],['Error','Irrecoverable','OutOfMemoryError, VirtualMachineError, AssertionError']])}
<h3>Keywords</h3>${T(['Keyword','Description'],[['try','Block with risky code; must be followed by catch or finally'],['catch','Handles the exception; must follow try; can be followed by finally'],['finally','Always executes, handled or not (e.g. close connections)'],['throw','Explicitly throws an exception object'],['throws','Declares exceptions a method may throw (in signature); does not throw']])}
${C(`try {
  int data = 100 / 0;
} catch (ArithmeticException e) {
  System.out.println(e);          // java.lang.ArithmeticException: / by zero
}
System.out.println("rest of the code...");`)}
${N('Without exception handling the program terminates abnormally and “rest of the code” never runs. If an exception occurs in a try statement, the <b>rest of the try block is skipped</b> — keep only risky code inside try.')}
<h3>Multi-catch</h3>${K(['Only <b>one exception</b> occurs at a time; only <b>one catch</b> block runs','Order catches <b>most specific → most general</b> (ArithmeticException before Exception)','Catch with a parent class is allowed'])}
${C(`try { int a[] = new int[5]; a[5] = 30 / 0; }
catch (ArithmeticException e)            { System.out.println("Arithmetic Exception occurs"); }
catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBounds"); }
catch (Exception e)                      { System.out.println("Parent Exception occurs"); }`)}
<h3>throw &amp; propagation</h3>${C(`static void validate(int age) {
  if (age < 18) throw new ArithmeticException("Person is not eligible to vote");
  else System.out.println("eligible");
}`)}<p><b>Exception propagation</b> = passing an exception from a method to its calling method. <b>Unchecked</b> exceptions propagate automatically; <b>checked</b> exceptions must be propagated manually with <code>throws</code>.</p>
${R('Overriding with exceptions: an overriding method may throw the same/narrower checked exception or any unchecked exception, but not a broader checked one.')}
<h3>Predict the output</h3>
${Q(`try { System.out.print("Hello" + " " + 1/0); } catch(ArithmeticException e){ System.out.print("World"); }`,'<b>World</b> (expression fails before printing)')}
${Q(`try{ print("Starting up "); throw new Exception(); } catch(Exception e){ print("Problem "); } finally { print("Shutting down "); }`,'<b>Starting up Problem Shutting down</b>. With <code>System.exit(0)</code> in catch: <b>Starting up Problem</b> (finally skipped).')}
${Q(`int i=1; try{i++;} catch(Exception e){i++;} finally{i++;} println(i);`,'<b>3</b>')}
${Q(`static int f(){ try{return 10;} catch(Exception e){return 20;} finally{return 30;} }`,'<b>30</b> (finally’s return wins)')}
${Q(`int i=1; try{ i=i/0; return ++i; } catch(Exception e){ return ++i; } finally{ return ++i; }`,'<b>3</b>')}
${Q(`String s="ONE"; try{ s+="TWO"; return s; } finally { s+="FOUR"; }`,'<b>ONETWO</b> (return value is fixed before finally runs). If the finally block itself returns s (starting from "ZERO", try adds ONE, finally adds THREE): <b>ZEROONETHREE</b>.')}
${Q(`i=1; try{i=i/0; return i;} catch(Exception e){i=i+1; return i;} finally{i=i+2; println(i);}`,'finally prints <b>4</b>, then main prints <b>2</b>')}
${Q(`println(1); try{ println(2); Integer.parseInt("ABC"); println(3);} catch(Exception e){println(4);} finally{println(5);} println(6);`,'<b>1 2 4 5 6</b>')}
${Q(`int[] a={1,2,3,4}; int i=a[4];  catches: NumberFormatException, NullPointerException, ArrayIndexOutOfBoundsException`,'<b>3</b>')}
<p><b>Compile errors:</b> statement between <code>try</code> and <code>catch</code> · <code>finally</code> placed after a statement following catch · <code>try</code> alone with no catch/finally · <code>catch(Exception)</code> before <code>catch(NullPointerException)</code> (unreachable) · <code>catch (Exception | NumberFormatException)</code> (related types in multi-catch) · code after <code>return</code> in finally (unreachable) · variable declared in try used after it · <code>class Geeks throws ...</code> · <code>throws Geeks</code> (not Throwable) · overriding with <code>throws FileNoteFoundException</code> (undefined class).</p>
<p>Other results: nested try where inner catches NPE but NumberFormatException thrown → outer <b>2</b>. <code>sleep()</code> propagated through m1→m2→m3 prints <b>ArithmeticException</b> then <b>Handled by Geeks</b>. Dividing 25/0 in <code>Div()</code> prints <b>Error: / by zero</b> then <b>BYE GEEKS</b>. Null reference access first → NPE caught by the general <code>catch(Exception)</code>, still prints BYE GEEKS. Rethrowing in catch uncaught → <code>NullPointerException: My_Exception</code>. Sub method throwing <code>ArithmeticException</code> overriding one throwing IOException is valid → prints <b>Sub CLass Method</b> then <b>Super Class Method</b>.</p>
<p>Quiz facts: <code>thrown</code> is not an exception keyword · exceptions arise at <b>run time</b> (checked ones are detected at compile time) · Exception is a <b>class</b> in <b>java.lang</b> · only checked exceptions can’t be ignored at compile time · “finally can’t throw exception” is an <b>invalid</b> statement.</p>`},
{g:'7 · Exceptions &amp; Threads',id:'threads',t:'Multithreading',h:`
<p><b>Multithreading</b> = executing multiple threads simultaneously. A <b>thread</b> is a lightweight sub-process, the smallest unit of processing — a separate path of execution. Threads are independent (an exception in one does not affect others) and use a <b>shared memory area</b>.</p>
${T(['Process (multiprocessing)','Thread (multithreading)'],[['Heavyweight; separate memory area each','Lightweight; shared memory, saves memory'],['Costlier context switching','Faster context switching'],['Independent programs','Sub-processes within one program']])}
<h3>Life cycle (states)</h3><p><b>New → Active (Runnable/Running) → Blocked/Waiting → Timed Waiting → Terminated.</b> <code>start()</code> moves a thread from New to Runnable; when scheduled, its <code>run()</code> executes.</p>${R('“EXECUTING” is <b>not</b> a legitimate thread state (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED are).')}
<h3>Creating threads — two ways</h3><p>The Thread class extends Object and implements <b>Runnable</b>. Constructors: <code>Thread()</code>, <code>Thread(String name)</code>, <code>Thread(Runnable r)</code>, <code>Thread(Runnable r, String name)</code>. Runnable has one method: <code>public void run()</code>.</p>
${C(`class Multi extends Thread {               // 1. extend Thread
  public void run() { System.out.println("thread is running..."); }
  public static void main(String a[]) { new Multi().start(); }
}
class Multi3 implements Runnable {          // 2. implement Runnable
  public void run() { System.out.println("thread is running..."); }
  public static void main(String a[]) {
    Thread t1 = new Thread(new Multi3());   // Thread(Runnable r)
    t1.start();
  }
}
Thread t = new Thread("My first thread"); t.start(); System.out.println(t.getName());`)}
${N('<code>start()</code> creates a <b>new call stack</b> and a new thread. Calling <code>run()</code> directly runs it like a normal method in the <b>current</b> thread (main). Starting a thread twice throws <code>IllegalThreadStateException</code>.')}
<h3>Thread scheduler</h3><ul><li><b>First Come First Serve:</b> t1 (arrival 0) first … t4 (arrival 3) last.</li><li><b>Time-slicing:</b> each thread gets a fixed slice (e.g. 2 s), then the CPU passes to the next.</li></ul>
<h3>Thread priority</h3><p>Java priorities are integer hints from <code>Thread.MIN_PRIORITY</code> (1) through <code>Thread.NORM_PRIORITY</code> (5) to <code>Thread.MAX_PRIORITY</code> (10). Use <code>setPriority()</code> and <code>getPriority()</code> when needed. A priority is a scheduler hint—not a guarantee that one thread runs first or receives more time on every JVM/operating system.</p>${C(`Thread worker = new Thread(task, "worker");
worker.setPriority(Thread.NORM_PRIORITY);
System.out.println(worker.getPriority()); // 5`)}
<h3>sleep() and join()</h3>${C(`public static void sleep(long mls) throws InterruptedException
public static void sleep(long mls, int n) throws InterruptedException
Thread.sleep(500);        // halts the current thread for 500 ms
t.join();                 // current thread waits until t finishes`)}<p>Two threads each printing 1–4 with <code>sleep(500)</code> produce interleaved output (1 1 2 2 3 3 4 4). <code>join()</code> throws <code>InterruptedException</code> if interrupted.</p>
<h3>Synchronization and race conditions</h3><p>When threads read and update shared mutable state at the same time, their operations can interleave and lose updates. A <code>synchronized</code> method or block uses an object's monitor so only one thread at a time executes the protected critical section for that monitor.</p>${C(`class Counter {
  private int value;
  public synchronized void increment() { value++; }
  public synchronized int getValue() { return value; }
}`)}<p>An instance synchronized method locks <code>this</code>; a static synchronized method locks the <code>Class</code> object. Keep critical sections short and use the same lock for related reads and writes.</p>
<h3>Inter-thread communication: wait and notify</h3><p>Threads can coordinate through an object's monitor. Call <code>wait()</code>, <code>notify()</code> or <code>notifyAll()</code> only while holding that object's monitor (inside a synchronized method/block). <code>wait()</code> releases the monitor while waiting; after notification, the thread must reacquire it before continuing.</p>${C(`class OneSlot {
  private String message;
  private boolean ready;

  public synchronized void put(String value) throws InterruptedException {
    while (ready) wait();               // wait for the consumer
    message = value;
    ready = true;
    notifyAll();
  }

  public synchronized String take() throws InterruptedException {
    while (!ready) wait();              // wait for the producer
    String value = message;
    ready = false;
    notifyAll();
    return value;
  }
}`)}<div class="box note"><b>Why a while loop?</b>A waiting thread may wake without the condition being true, or another thread may consume the change first. Recheck the condition after every wake-up. Prefer <code>notifyAll()</code> when multiple kinds of waiters may share a monitor.</div>
<h3>Interrupt, do not forcibly stop</h3><p>Older APIs offered <code>Thread.stop()</code>, <code>suspend()</code> and <code>resume()</code>; they are deprecated and unsafe because they can interrupt code while shared state is inconsistent or leave locks held. Use cooperative cancellation: set a flag or call <code>interrupt()</code>, let the task clean up, and optionally wait with <code>join()</code>. Restore the interrupt status when catching <code>InterruptedException</code> if the method cannot propagate it.</p>${C(`class Worker implements Runnable {
  @Override public void run() {
    while (!Thread.currentThread().isInterrupted()) {
      doOneUnitOfWork();
    }
    cleanUp();
  }
  private void doOneUnitOfWork() { /* work */ }
  private void cleanUp() { /* release resources */ }
}`)}
<h3>Practice</h3>
${Q(`Thread myThread = new MyThread(); myThread.run();  // prints Thread.currentThread().getName()`,'<b>In run method; thread name is: main</b> then <b>In main method; thread name is: main</b> (option c)')}
${Q(`Thread thread = new Thread(new MyThread()); thread.run(); thread.run(); thread.start();`,'<b>main, main, Thread-0</b>')}
${Q(`Runnable r = new MyThread();  // MyThread extends Thread
Thread t = new Thread(r); t.start();`,'Compiles (Thread implements Runnable) and prints <b>Running</b> (option c)')}
${Q(`Thread.currentThread().join();  // main joins itself`,'Prints “Worker ” then main waits forever for itself — the program <b>hangs</b>')}
<p>Quiz facts: <code>wait()</code>, <code>notify()</code>, <code>notifyAll()</code> belong to <b>Object</b> · class implementing Runnable must define <code>public void run()</code> · <code>sleep()</code> suspends a thread for a period · <code>join()</code> waits for a thread to finish.</p>`},
{g:'8 · Java I/O',id:'console-io',t:'Console Input &amp; Output',h:`
<h3>What is I/O?</h3><p>Every program: <b>Input → Processing → Output</b>. Input sources: keyboard, file, network, database. Output targets: console, file, network, printer. <code>System.in</code> = standard input stream (keyboard), <code>System.out</code> = standard output.</p>
<h3>Scanner (java.util)</h3>${C(`import java.util.Scanner;
Scanner sc = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = sc.nextLine();
System.out.println("Hello " + name);`)}
${T(['Method','Reads'],[['next()','One word (input “Rahul Sharma” → Rahul)'],['nextLine()','Complete line (→ Rahul Sharma)'],['nextInt()','Integer'],['nextDouble() / nextFloat()','Double / Float'],['nextLong() / nextBoolean()','Long / Boolean']])}
${C(`int age = sc.nextInt();
double per = sc.nextDouble();`)}
${N('<b>Common Scanner problem:</b> <code>nextInt()</code> leaves the newline in the buffer, so a following <code>nextLine()</code> returns immediately (name “skipped”). <b>Fix:</b> call an extra <code>sc.nextLine()</code> after nextInt().')}
${C(`int age = sc.nextInt();
sc.nextLine();                 // consume leftover newline
String name = sc.nextLine();`)}
<h3>BufferedReader (java.io)</h3><p>Chain: <b>System.in</b> (bytes) → <b>InputStreamReader</b> (chars) → <b>BufferedReader</b> (lines). <code>readLine()</code> always returns a <b>String</b>, so convert with <code>Integer.parseInt()</code>/<code>Double.parseDouble()</code>. Needs <code>throws IOException</code>.</p>${C(`BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
int age = Integer.parseInt(br.readLine());`)}
${T(['Feature','Scanner','BufferedReader'],[['Package','java.util','java.io'],['Ease','Easier','Slightly more complex'],['Reads int/double directly','Yes','No'],['Complete line','Yes','Yes'],['Parsing needed','Usually no','Yes'],['Main method','nextInt()','readLine()']])}
<h3>Console output</h3>${K(['<code>print()</code> – no new line (HelloWorld)','<code>println()</code> – moves to next line','<code>printf()</code> – formatted output: <code>%d</code> int, <code>%f</code> float, <code>%s</code> String, <code>%c</code> char, <code>%b</code> boolean, <code>%n</code> newline'])}
${C(`System.out.printf("Name = %s%n", name);
System.out.printf("Marks = %.2f%n", 87.5);   // Marks = 87.50`)}
<h3>Practice program</h3>${C(`System.out.print("Enter name: ");  String name = sc.nextLine();     // nextLine first
System.out.print("Enter roll number: "); int rollNo = sc.nextInt();
System.out.print("Enter marks: "); double marks = sc.nextDouble();`)}
<p>Viva: input vs output; System.in/System.out; print vs println; what readLine() returns and why parseInt; Scanner vs BufferedReader.</p>`},
{g:'8 · Java I/O',id:'file-handling',t:'File Handling (Character Streams)',h:`
<h3>Why files?</h3><p>Variables live in RAM and vanish when the program ends. Files give <b>persistent storage</b>: write data, and the next run can read it back. File handling covers creating/opening, writing, appending, updating, reading, deleting files, managing directories and handling file errors. Packages: <code>java.io</code> (classic) and <code>java.nio.file</code> (modern NIO.2).</p>
${T(['Text files','Binary files'],[['Readable characters (student.txt, data.csv)','Raw bytes (photo.jpg, student.ser)'],['Reader / Writer classes','InputStream / OutputStream classes']])}
<h3>Streams</h3><p>A <b>stream</b> is a flow of data between a source and a destination: File → input stream → program; program → output stream → File. <b>Byte streams</b> (InputStream/OutputStream) for binary; <b>character streams</b> (Reader/Writer) for text.</p>
<h3>FileWriter</h3><p>Writes character data; creates the file if missing; default mode <b>replaces</b> contents; <code>write()</code> accepts String, char, char[]; <code>close()</code> releases the resource and flushes output.</p>${C(`FileWriter fw = new FileWriter("student.txt");
fw.write("Name: Rahul\n");
fw.write("Roll No: 101\n");
fw.close();

FileWriter fa = new FileWriter("data.txt", true);   // true = APPEND
fa.write("\nNew Student Added");
fa.close();`)}
<h3>FileReader</h3><p><code>read()</code> returns an <b>int</b>, one character per call; cast to <code>char</code>; returns <b>-1 at end of file (EOF)</b> — safe because -1 is never a valid character.</p>${C(`FileReader fr = new FileReader("data.txt");
int ch;
while ((ch = fr.read()) != -1) {
  System.out.print((char) ch);     // print(), not println(): file has its own newlines
}
fr.close();`)}
${T(['','FileReader','FileWriter'],[['Purpose','Reading','Writing'],['Direction','File → Program','Program → File'],['Data','Characters','Characters'],['Main method','read()','write()'],['EOF','-1','Not applicable']])}
<h3>Exceptions &amp; try-with-resources</h3><p>File operations can fail (missing file, no permission, bad path, disk problem). Usual: <code>FileNotFoundException</code>, <code>IOException</code>. Use <code>throws</code> or try-catch; prefer <b>try-with-resources</b>, which closes the file automatically even on error.</p>${C(`try (FileReader fr = new FileReader("data.txt")) {
  int ch;
  while ((ch = fr.read()) != -1) System.out.print((char) ch);
} catch (IOException e) {
  System.out.println("File error: " + e.getMessage());
}`)}
<h3>The File class</h3><p>Represents a file or directory <b>path</b>; it does not read or write contents.</p>${T(['Method','Purpose'],[['exists()','File exists?'],['createNewFile()','Creates a new empty file'],['delete()','Deletes the file'],['getName() / getPath()','Name and path'],['getAbsolutePath()','Full path'],['length()','Size in bytes'],['isFile() / isDirectory()','Type check'],['canRead() / canWrite()','Permissions'],['mkdir()','Creates a directory'],['list()','Names in a directory ("." = current)']])}${C(`File f = new File("test.txt");
if (f.createNewFile()) System.out.println("File created"); else System.out.println("Already exists");
File dir = new File("StudentData"); dir.mkdir();
for (String n : new File(".").list()) System.out.println(n);`)}
<h3>Buffered I/O</h3><p>A <b>buffer</b> reduces the number of slow low-level I/O operations. Chain: Program → BufferedWriter → FileWriter → File; File → FileReader → BufferedReader → Program.</p>${C(`BufferedReader br = new BufferedReader(new FileReader("data.txt"));
String line;
while ((line = br.readLine()) != null) System.out.println(line);   // null = no more lines
br.close();`)}<p><code>bw.newLine()</code> writes a platform-correct line separator.</p>
<h3>PrintWriter</h3><p>Convenient text output with <code>print()</code>, <code>println()</code>, <code>printf()</code> — ideal for formatted reports.</p>${C(`PrintWriter pw = new PrintWriter("student.txt");
pw.println("Student Report");
pw.printf("Name: %s%n", "Rahul");
pw.printf("Marks: %d%n", 85);
pw.close();`)}
<h3>Character vs byte streams</h3>${R('Rule of thumb: <b>text → Reader/Writer, everything else → streams</b>. Never use FileReader on a .jpg. Pairs: FileReader/FileInputStream and FileWriter/FileOutputStream.')}
<p>Related roadmap topics named in the tutorial (Serialization of <code>.ser</code> objects and NIO.2, e.g. <code>Files.copy()</code>) are only mentioned briefly; the key point is that real programs add buffering or use <code>Files.copy()</code> for efficient copying.</p>
<p>Practice/viva: write 5 student names with FileWriter; display a file with FileReader; append a record; what happens if FileWriter is opened without append mode (old content is replaced); why close files (release resources, flush pending data).</p>`},
{g:'8 · Java I/O',id:'byte-streams',t:'Byte Streams',h:`
<p>A <b>byte stream</b> processes data as raw bytes (8 bits = 1 byte) — essential for binary files: images (JPG, PNG), PDF, MP3, MP4, ZIP, EXE. Both main classes are in <code>java.io</code>.</p>
${T(['','FileInputStream','FileOutputStream'],[['Job','Reads raw bytes from a file','Writes raw bytes to a file'],['Create','<code>new FileInputStream("data.txt")</code>','<code>new FileOutputStream("data.txt")</code>']])}
<h3>Reading byte-by-byte</h3>${C(`FileInputStream fis = new FileInputStream("input.txt");
int data;
while ((data = fis.read()) != -1) {
  System.out.print((char) data);
}
fis.close();`)}
${N('<b>Why <code>int</code>, not <code>byte</code>?</b> read() returns 0–255 for valid data and <b>-1 for EOF</b>; only an int can represent both. For a file “ABC”: 65, 66, 67, then -1.')}
<h3>Writing</h3>${C(`FileOutputStream fos = new FileOutputStream("output.txt");
fos.write("Hello Java".getBytes());   // String → byte[] with getBytes()
fos.write(65);                        // one byte → letter 'A' (not the text "65")
byte[] d = {65, 66, 67, 68, 69};
fos.write(d);                         // ABCDE
fos.close();`)}
<h3>Copying a file</h3>${C(`int data;
while ((data = fis.read()) != -1) fos.write(data);   // one byte at a time`)}
<h3>Buffers</h3><p>A <b>buffer</b> is a temporary memory area holding data during transfer. <code>byte[] buffer = new byte[1024];</code> — a 2500-byte file is read as 1024 + 1024 + 452 bytes, then -1: far fewer I/O operations.</p>${C(`byte[] buffer = new byte[1024];
int bytesRead;
while ((bytesRead = fis.read(buffer)) != -1) {
  fos.write(buffer, 0, bytesRead);    // buffer, start, number of bytes
}`)}${R('Write only <code>bytesRead</code> bytes: the last read may fill only part of the buffer (e.g. 452), and old data beyond it would corrupt the copy.')}
<h3>try-with-resources + buffer</h3>${C(`try (FileInputStream fis = new FileInputStream("source.txt");
     FileOutputStream fos = new FileOutputStream("destination.txt")) {
  byte[] buffer = new byte[1024];
  int bytesRead;
  while ((bytesRead = fis.read(buffer)) != -1) fos.write(buffer, 0, bytesRead);
  System.out.println("File copied successfully.");
} catch (IOException e) { System.out.println("Error: " + e.getMessage()); }`)}<p>Resources are closed automatically — safer and cleaner. Binary files (image.jpg → image_copy.jpg) copy the same way, e.g. with a 4096-byte buffer.</p>
<h3>Handling IOException</h3><p>Causes: file doesn’t exist, can’t be opened, permission denied, disk error. Option 1: <code>try/catch (IOException e)</code>. Option 2: <code>throws IOException</code> on the method (convenient for introductory examples).</p>
<h3>Overwrite vs append</h3>${C(`new FileOutputStream("data.txt");          // default: overwrite
new FileOutputStream("data.txt", true);    // append mode
fos.write("\nThis line is appended.".getBytes());`)}
<h3>Important methods</h3>${T(['FileInputStream','FileOutputStream'],[['read() – one byte','write(int b) – one byte'],['read(byte[] b) – into array','write(byte[] b) – array'],['read(byte[] b, int off, int len)','write(byte[] b, int off, int len)'],['available() – estimated readable bytes','flush()'],['skip(long n)','close()'],['close()','']])}
<h3>Byte vs character stream</h3>${T(['Feature','Byte stream','Character stream'],[['Unit','Byte','Character'],['Input / Output class','FileInputStream / FileOutputStream','FileReader / FileWriter'],['Package','java.io','java.io'],['Binary files','Suitable','Not the usual choice'],['Text files','Suitable','Particularly suitable'],['Example','Image, PDF','Text document']])}
<h3>Common mistakes</h3>${T(['Incorrect','Correct'],[['<code>while (fis.read() != 0)</code>','<code>!= -1</code> (-1 is EOF)'],['<code>(data = (byte) fis.read())</code>','Use an <code>int data</code>'],['Forgetting <code>close()</code>','close() or try-with-resources'],['<code>fos.write(text)</code>','<code>fos.write(text.getBytes())</code>'],['<code>fos.write(buffer)</code>','<code>fos.write(buffer, 0, bytesRead)</code>']])}
<h3>Three approaches compared</h3>${T(['Approach','Advantage','Trade-off'],[['One byte at a time','Easy to understand','More I/O operations'],['Buffer','More efficient for larger files','Must remember write(buffer,0,bytesRead)'],['Try-with-resources + buffer','Modern pattern; auto-close','Slightly more syntax']])}
<h3>Practical programs</h3><p>Count bytes (loop read() with a counter until -1: “Hello Java” → <b>10</b>) · copy one byte at a time · copy with buffer · append data · copy an image.</p>
<h3>Exam Q&amp;A</h3>${T(['Question','Answer'],[['Byte stream?','Processes data in bytes; FileInputStream/FileOutputStream'],['read() at EOF?','-1'],['Why int?','Represents 0–255 and -1'],['getBytes()?','Converts a String to a byte array'],['Append?','<code>new FileOutputStream("file.txt", true)</code>'],['Buffer?','Temporary byte array transferring many bytes at once'],['try-with-resources?','Automatically closes resources']])}`},
{g:'9 · Revision',id:'revise',t:'Last-Minute Revision',h:`
${R('Interface: all methods public abstract, variables public static final; class <code>implements</code> many interfaces; Java 8 adds default and static methods. Abstract class can have constructors and state; interface cannot.')}
${R('Exceptions: <code>Throwable → Exception / Error</code>; checked (compile-time) vs unchecked (RuntimeException). catch order specific → general; <code>finally</code> always runs (except <code>System.exit</code>); a return in finally overrides others.')}
${R('Threads: create by extending Thread or implementing Runnable; <code>start()</code> makes a new thread, <code>run()</code> alone does not; <code>sleep()</code> pauses, <code>join()</code> waits; wait/notify live in Object.')}
${R('I/O: <code>read()</code> returns int, -1 = EOF; text → FileReader/FileWriter, binary → FileInputStream/FileOutputStream; <code>true</code> as 2nd argument = append; use try-with-resources; <code>write(buffer, 0, bytesRead)</code>; <code>nextInt()</code> then extra <code>nextLine()</code>.')}
${R('Packages: <code>package</code> statement first, <code>import java.util.*</code> excludes sub-packages, <code>javac -d .</code> creates the package folder.')}
${R('Constructor: no return type, same name, not inherited, not static/final/abstract. Order: static block → instance block → constructor.')}
${R('Overloading = compile time (static binding). Overriding = runtime (dynamic binding). Static/private/final → static binding.')}
${R('<code>==</code> compares references; <code>equals()</code> compares content. String is immutable; StringBuffer/StringBuilder are mutable.')}
${R('Java does not support multiple inheritance with classes — use interfaces. <code>Object</code> is the root of all classes.')}
${R('Abstract class: cannot be instantiated, may have constructors. Final: variable constant, method not overridden, class not inherited.')}
${R('Widening is automatic; narrowing needs a cast and may lose data. byte/short/char → int in expressions.')}
${R('GC reclaims <b>unreachable</b> objects; <code>System.gc()</code> is only a request; <code>finalize()</code> runs at most once.')}
${N('Exam checklist: 4 pillars with examples · JDK/JRE/JVM · primitives table · operators &amp; precedence · loops · String pool · constructors vs methods · this/super/static · access modifiers · overloading vs overriding · abstract vs final · nested class types · autoboxing/unboxing.')}
${T(['Keyword','Use'],[['this','Current object'],['super','Immediate parent object / constructor'],['static','Belongs to class'],['final','Constant / no override / no inherit'],['abstract','Incomplete class/method'],['new','Creates object on heap'],['extends','Inheritance'],['implements','Class implements interface(s)'],['try / catch / finally','Handle exceptions'],['throw / throws','Raise / declare an exception'],['start()','Begins a new thread (not run())'],['package / import','Organise / use classes']])}`}
];
S.unshift({
g:'0 · Start Here',id:'course-map',t:'Course Map &amp; Learning Outcomes',h:`
<p>Welcome to a beginner-first path through <b>Object-Oriented Programming in Java (CSC 2104)</b>. You can start with no Java experience: follow the topic list from top to bottom, type each example yourself, then use the exam-practice and revision chapters to check your understanding.</p>
<div class="box key"><b>What you will learn</b>Build Java programs from the ground up, model a problem using classes and objects, and explain the OOP principles with working examples. The guide moves from syntax and data to object design, inheritance, abstraction and the supporting Java runtime topics.</div>
<h3>Course outcomes</h3><ol><li>Define OOP concepts using classes and objects to solve problems.</li><li>Apply encapsulation and abstraction through objects and classes.</li><li>Demonstrate inheritance, polymorphism and interfaces.</li><li>Analyse exception handling, multithreading and garbage collection.</li></ol>
<h3>Recommended order of study</h3><ol><li><b>Understand the model:</b> OOP, classes, objects and the four pillars.</li><li><b>Learn Java:</b> how a Java program runs, variables, data types, conversion and operators.</li><li><b>Control a program:</b> conditions, loops, arrays and strings.</li><li><b>Build classes:</b> fields, methods, constructors, argument passing, <code>this</code>, <code>static</code> and nested classes.</li><li><b>Model relationships:</b> inheritance, access modifiers, <code>super</code>, overloading, overriding, abstract classes and interfaces.</li><li><b>Understand the runtime:</b> wrappers and garbage collection.</li><li><b>Complete the practical syllabus:</b> exceptions, console/file I/O, packages and threads.</li><li><b>Prepare for assessment:</b> trace code by hand, solve the slide quizzes and explain the project design.</li></ol>
<h3>Assessment plan from the course handout</h3>${T(['Assessment','Components','Marks'],[['Mid-term examination','Closed book','30'],['Class work sessional','Two quizzes (5 each): 10 · Attendance: 5 · Mini project + viva or NPTEL: 15','30'],['End-term examination','Closed book','40'],['Total','','100']])}
<h3>Course syllabus checklist</h3><ul><li>History and evolution of OOP; benefits and applications; Java, C# and C++.</li><li>Programming fundamentals: control flow, operators, data types, type conversion, wrapper classes and arrays.</li><li>Classes and objects; reference variables; methods; constructors; overloading; objects as parameters; argument passing; returning objects; recursion; access control; <code>final</code>; nested and inner classes.</li><li>Console input/output and file handling.</li><li>Inheritance, multilevel hierarchies, access modifiers, overriding and abstract classes.</li><li>Exception types, custom exceptions, try/catch, <code>throw</code> and <code>throws</code>.</li><li>Threads, synchronization and inter-thread communication.</li></ul>
<div class="box note"><b>Study advice</b>Write each code example in a small Java file, compile it, predict the output before running it, and explain every line aloud. In exams, distinguish a compile-time error from a runtime result before tracing values.</div>
<h3>Recommended references</h3><ul><li>Herbert Schildt, <i>Java: The Complete Reference</i>, 13th edition.</li><li>E. Balagurusamy, <i>Object Oriented Programming with Java</i>.</li><li>Use the uploaded lecture slides as the course-specific source of examples and terminology.</li></ul>`});
S.splice(S.findIndex(s=>s.id==='datatypes'),0,{
g:'2 · Java Fundamentals',id:'fundamentals',t:'Java Programming Fundamentals',h:`
<p>A Java program is a set of instructions written in source code. Start with the basic shape below, then learn what each part means before adding decisions, loops and objects.</p>
${C(`public class Welcome {
  public static void main(String[] args) {
    System.out.println("Hello, Java!");
  }
}`)}
<h3>Read the program from the outside in</h3><ul><li><code>public class Welcome</code> declares a class; save this source as <code>Welcome.java</code> because a public top-level class name must match its file name.</li><li><code>main</code> is the standard entry point the Java launcher looks for. <code>String[] args</code> receives command-line arguments.</li><li><code>System.out.println</code> prints a line to the console. Java statements generally end in a semicolon; braces group class and method bodies.</li><li>Java is case-sensitive: <code>main</code> and <code>Main</code> are different identifiers.</li></ul>
<h3>Compile and run</h3>${C(`javac Welcome.java
java Welcome`)}<p>The compiler checks the source and produces bytecode in <code>Welcome.class</code>. The Java Virtual Machine (JVM) loads and executes that bytecode. The JDK includes the tools to compile and run; the JVM is the execution engine.</p>
<h3>Variables, literals and expressions</h3><p>A variable is a named, typed storage location. A literal is a value written directly in code. An expression combines values, variables and operators to produce a value.</p>${C(`int attempts = 3;       // declaration + initialization
double price = 19.95;    // decimal literal
char grade = 'A';        // one character uses single quotes
String name = "Mina";    // text uses double quotes
boolean passed = true;
int next = attempts + 1;`)}
<h3>Names, comments and blocks</h3><ul><li>Identifiers can use letters, digits, <code>_</code> and <code>$</code>, but cannot start with a digit or be a reserved keyword. Convention: <code>UpperCamelCase</code> for classes and <code>lowerCamelCase</code> for variables and methods.</li><li><code>// line comment</code>, <code>/* block comment */</code> and <code>/** documentation comment */</code> explain intent; comments do not run as Java code.</li><li>Variables declared inside a method or block are local and must be assigned before use. Fields receive default values; local variables do not.</li></ul>
<h3>Command-line arguments</h3>${C(`public class Greet {
  public static void main(String[] args) {
    if (args.length > 0) {
      System.out.println("Hello, " + args[0]);
    }
  }
}
// Compile: javac Greet.java
// Run:     java Greet Mina`)}<div class="box note"><b>Remember</b>For a first run, compile the file containing the public class, then launch using the class name without <code>.java</code> or <code>.class</code>.</div>`});
S.splice(S.findIndex(s=>s.id==='strings-arrays'),0,{
g:'3 · Core OOP Building Blocks',id:'methods',t:'Methods, Objects &amp; Recursion',h:`
<p>A <b>method</b> is a named block of code that performs a task. Methods let you divide a problem into smaller reusable steps. A method can receive input through parameters and return a result to its caller.</p>
<h3>Method declaration and call</h3>${C(`accessModifier static? returnType methodName(parameterList) {
 // method body
 return value;  // omit this line when returnType is void
}

class Calculator {
 static int add(int left, int right) {
   return left + right;
 }
}
int total = Calculator.add(4, 6);`)}
<ul><li><b>Parameters</b> are the variable names/types in the declaration; <b>arguments</b> are the actual values supplied by the call.</li><li>The declared return type must match the value returned. Use <code>void</code> when no value is returned.</li><li>A local variable exists only inside its block/method. Each method call gets its own stack frame, which is removed when the call returns.</li><li>Instance methods can use instance fields directly; static methods have no current object and need an object reference to use instance members.</li></ul>
<h3>Java is always pass-by-value</h3><p>Java copies each argument into the parameter. For a primitive, the copied value is the number/boolean/character. For an object, the copied value is the reference. The method can mutate the shared object through that reference, but assigning a different reference to the parameter does not change the caller's variable.</p>${C(`class Box {
 int value;
 Box(int value) { this.value = value; }
}
public class PassingObjects {
 static void change(Box box) { box.value = 9; }
 static void replace(Box box) { box = new Box(0); }

 public static void main(String[] args) {
   Box original = new Box(2);
   change(original);
   System.out.println(original.value); // 9: shared object was mutated
   replace(original);
   System.out.println(original.value); // 9: only the local copy was reassigned
 }
}`)}
<div class="box rem"><b>Must remember</b>Passing an object does <b>not</b> mean Java passes the variable by reference. The reference itself is copied by value; both references initially point to the same object.</div>
<h3>Objects as parameters and return values</h3><p>A method may accept an object, inspect it or update its state. It may also return an object reference—for example a factory method. The caller should check the object's contract and avoid unexpected <code>null</code> returns.</p>${C(`static Box createBox(int value) {
 return new Box(value);
}
static void printBox(Box box) {
 System.out.println(box.value);
}
Box fresh = createBox(12);
printBox(fresh);`)}
<p>To return several related values, define a small class or record rather than trying to return multiple values separately.</p>
<h3>Recursion</h3><p>A recursive method solves a problem by calling itself with a smaller input. Every correct recursive solution needs (1) a <b>base case</b> that stops, and (2) a <b>progress step</b> that moves toward that base case.</p>${C(`static long factorial(int n) {
 if (n < 0) throw new IllegalArgumentException("n must be non-negative");
 if (n <= 1) return 1;                 // base case
 return n * factorial(n - 1);          // smaller subproblem
}
System.out.println(factorial(5));        // 120`)}
${T(['Trace','What happens'],[['factorial(5)','5 × factorial(4)'],['factorial(4) … factorial(2)','Each call waits for a smaller call'],['factorial(1)','Base case returns 1'],['Return/unwind','2 × 1, then 3 × 2, then 4 × 6, then 5 × 24 = 120']])}
<h3>Recursion exam checklist</h3><ul><li>Trace calls downward to the base case, then trace return values back up.</li><li>Confirm that every path reaches a base case. Without one, calls continue until <code>StackOverflowError</code>.</li><li>Recursion uses one stack frame per active call; for a simple count/sum, a loop may use less memory.</li><li>Java does not guarantee tail-call optimization; do not rely on tail recursion to avoid stack growth.</li></ul>
${Q(`factorial(4) using the method above`,'<b>24</b>: 4 × 3 × 2 × 1.')}
${Q(`static int sum(int n){ if(n==0)return 0; return n+sum(n-1); }  sum(4)`,'<b>10</b>: 4 + 3 + 2 + 1 + 0.')}`});
S[S.length-1].g='12 · Final Review';
S.splice(S.length-1,0,{
g:'10 · Exam Preparation',id:'exam-practice',t:'Slide Quiz &amp; Worked Answers',h:`
<p>Attempt each output question on paper first. Trace class initialization, instance initialization, constructor calls and assignment rules in order. Then open the answer and explanation.</p>
${N('A final variable cannot be reassigned. If a practice snippet attempts it, the correct answer is a compile-time error—not a printed value.')}
<div id="quiz-bank"></div>`},{
g:'11 · Applied Practice',id:'projects',t:'Mini-Project Workshop: SkillBarter',h:`
<p>The course mini-project handout offers a broad selection of Java application ideas. This chapter turns one of them—<b>SkillBarter</b>, a peer-to-peer skill-exchange platform—into a worked example of applying OOP rather than treating concepts as isolated definitions.</p>
<h3>Problem and use case</h3><p>Students may have skills to teach and skills they want to learn, but need a structured way to find a suitable peer, arrange a session and give feedback. A learner searches for a skill; the system ranks matching mentors; the learner schedules a session; after completion, the learner rates the mentor. One student can be both mentor and learner.</p>
<h3>Design the model before coding</h3>${T(['Type','Responsibility','OOP concept'],[['<code>User</code> (abstract)','Shared identity: user ID, name, email; declares profile display','Abstraction'],['<code>Student</code>','Extends User; offers/wants skills and holds ratings','Inheritance, encapsulation'],['<code>Skill</code>','Skill name, category, level and learning goal','Class and object'],['<code>Session</code>','Mentor, learner, skill, date/time and status','Object relationships, enum'],['<code>Rating</code>','Score (1–5), feedback, reviewer and recipient','Validation, encapsulation'],['<code>Match</code>','Candidate mentor, skill and calculated score','Encapsulation'],['<code>SkillProvider</code>, <code>Rateable</code>','Describe capabilities a student can perform','Interfaces'],['<code>SkillExchangeSystem</code>','Registers students, finds mentors and schedules sessions','Service / collections']])}
<h3>Use the four pillars in the design</h3><ul><li><b>Encapsulation:</b> keep fields private; validate a rating before storing it; return a defensive copy of mutable lists.</li><li><b>Inheritance:</b> <code>Student extends User</code> to reuse shared identity data.</li><li><b>Polymorphism:</b> override <code>displayProfile()</code>; accept a <code>User</code> reference and let the runtime choose the student's implementation.</li><li><b>Abstraction:</b> make <code>User</code> abstract and use interfaces for independent capabilities such as offering skills and receiving ratings.</li></ul>
<h3>Small, complete Java model</h3>${C(`import java.util.ArrayList;
import java.util.List;

interface SkillProvider {
  void addOfferedSkill(String skill);
  List<String> getOfferedSkills();
}

abstract class User {
  private final int userId;
  private final String name;

  User(int userId, String name) {
    this.userId = userId;
    this.name = name;
  }

  public int getUserId() { return userId; }
  public String getName() { return name; }
  public abstract void displayProfile();
}

class Student extends User implements SkillProvider {
  private final List<String> offeredSkills = new ArrayList<>();

  Student(int userId, String name) {
    super(userId, name);
  }

  @Override
  public void addOfferedSkill(String skill) {
    if (skill == null || skill.isBlank()) {
      throw new IllegalArgumentException("Skill must not be blank");
    }
    offeredSkills.add(skill);
  }

  @Override
  public List<String> getOfferedSkills() {
    return List.copyOf(offeredSkills);
  }

  @Override
  public void displayProfile() {
    System.out.println(getName() + " offers " + offeredSkills);
  }
}

public class SkillBarterDemo {
  public static void main(String[] args) {
    Student mentor = new Student(1, "Ravi");
    mentor.addOfferedSkill("Python");
    User profile = mentor;            // upcasting
    profile.displayProfile();         // Student implementation runs
  }
}`)}
<h3>Match candidates with a score</h3><p>The presentation's example uses <code>score = min(100, level × 15 + average rating × 8)</code>. With <code>NONE=0</code>, <code>BEGINNER=1</code>, <code>INTERMEDIATE=2</code> and <code>ADVANCED=3</code>, Ravi (Advanced, rated 5.0) scores <b>85</b> (3 × 15 + 5 × 8), while an unrated Beginner such as Meera scores <b>15</b>. Sort matches highest-first with a <code>Comparator</code>.</p>
<div class="box note"><b>Design check</b>Define the enum order and treat an unrated mentor's average rating as 0. The score is capped at 100; document that rule so test results are predictable.</div>
<h3>Implement features in small steps</h3><ol><li>Define model types, enums and input validation.</li><li>Add student registration and unique-ID checks.</li><li>Store lookups in a <code>HashMap</code> and session history in an <code>ArrayList</code>.</li><li>Search offered skills, compute match scores and sort results.</li><li>Schedule, complete and rate a session; reject invalid state transitions.</li><li>Test normal cases and edge cases: unknown user, duplicate ID, blank skill, rating outside 1–5 and rating an incomplete session.</li><li>Add persistence only after the in-memory model works. For database-backed versions, use a DAO, prepared statements and try-with-resources; keep credentials in environment configuration.</li></ol>
<h3>Other project options in the course brief</h3><p>The complete original handout lists <b>30</b> application ideas, including expense settlement, personal finance, task/habit management, campus events, parking, lost and found, attendance, polling, file organization, meeting scheduling, inventory, railway reservations, patient triage, scholarship allocation, timetabling, exam generation, seating allocation, CPU scheduling, document search, log analysis, text compression, concurrent banking, ticket reservation, downloads and real-time multi-user systems. The full brief is included below.</p>`});

const sourceDeckForLesson={
  'course-map':'1. Orientation.pptx',
  'oop-intro':'2. Introduction to OOP.pptx',
  'fundamentals':'3. Java Programming Basics.pptx',
  'datatypes':'Type Casting.pptx',
  'strings-arrays':'Strings and Arrays in Java.pptx',
  'constructors':'Constructor.pptx',
  'this':'This Keyword.pptx',
  'static':'Static keyword.pptx',
  'gc':'Garbage Collection.pptx',
  'wrapper':'Wrapper Classes.pptx',
  'inheritance':'Inheritance 1.pptx',
  'overloading':'Method Overloading in Java.pptx',
  'overriding':'Runtime Polymorphism.pptx',
  'abstract':'Abstract Class.pptx',
  'nested':'Nested Classes in Java.pptx',
  'exam-practice':'Test Your Skills.pptx',
  'projects':'SkillBarter.pptx'
};
const materials=window.courseMaterials;
if(!materials||!Array.isArray(materials.decks)||!materials.projectBrief)throw new Error('The local course-material archive could not be loaded.');
for(const file of Object.values(sourceDeckForLesson)){
  if(!materials.decks.some(deck=>deck.file===file))throw new Error('Missing local presentation archive: '+file);
}
function escapeHtml(value){
  return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function renderSlideArchive(file){
  const deck=materials.decks.find(item=>item.file===file);
  if(!deck)throw new Error('Missing local presentation archive: '+file);
  return '<details class="source-archive"><summary>Original lecture slides · '+escapeHtml(deck.title)+' · '+deck.slides.length+' slides</summary><p>All slide text and image-only slides are preserved here, including examples and practice questions. Open a slide to review its original content.</p>'+
    deck.slides.map(slide=>{
      const text=slide.text?'<pre>'+escapeHtml(slide.text)+'</pre>':'<p class="empty-slide">No editable slide text was available; embedded visual content is shown below when present.</p>';
      const images=(slide.images||[]).map((image,index)=>'<img loading="lazy" decoding="async" src="data:'+image.mime+';base64,'+image.data+'" alt="Embedded image '+(index+1)+' from '+escapeHtml(deck.title)+' slide '+slide.number+'">').join('');
      return '<details class="source-slide"><summary>Slide '+slide.number+' · '+escapeHtml(slide.title)+'</summary>'+text+(images?'<div class="slide-images">'+images+'</div>':'')+'</details>';
    }).join('')+'</details>';
}
function renderProjectBrief(){
  return '<details class="source-archive"><summary>Original mini-project brief · '+materials.projectBrief.pages.length+' pages</summary><p>Extracted text from the complete uploaded project brief, including its full list of proposed applications, features and suggested Java concepts.</p><div class="source-pages">'+
    materials.projectBrief.pages.map(page=>'<section class="source-page"><h5>Page '+page.number+'</h5><pre>'+escapeHtml(page.text)+'</pre></section>').join('')+'</div></details>';
}
const quizQuestions=[
  {code:`public class Main {
  { System.out.println("1"); }
  static { System.out.println("2"); }
  Main() { System.out.println("3"); }
  static { System.out.println("4"); }
  { System.out.println("5"); }
  public static void main(String[] args) {
    new Main();
    System.out.println("6");
  }
}`,answer:'2 4 1 5 3 6',why:'Static blocks run once in source order before main. For the new object, instance blocks run in source order before the constructor.'},
  {code:`class Myclass {
  Myclass() { System.out.println("constructor"); }
  static void m1() { System.out.println("static method"); }
  void m2() { System.out.println("instance method"); }
  static { System.out.println("static block"); }
  { System.out.println("instance block"); }
  public static void main(String[] args) {
    Myclass obj = new Myclass();
    m1();
    obj.m2();
  }
}`,answer:'static block → instance block → constructor → static method → instance method',why:'Class initialization precedes main; object initialization precedes the constructor; the two method calls then happen in the order written.'},
  {code:`class Myclass {
  static { System.out.println("static block"); }
  { System.out.println("instance block"); }
  public static void main(String[] args) {
    new Myclass();
    new Myclass();
    new Myclass();
  }
}`,answer:'Static block once, then instance block three times.',why:'Static initialization is per class load. Instance initialization runs separately for each constructed instance.'},
  {code:`class Constructor {
  static int x = 1;
  Constructor(int n) { x = n; }
  public static void main(String[] args) {
    Constructor obj = new Constructor(4);
    System.out.println(Constructor.x);
  }
}`,answer:'4',why:'The constructor assigns 4 to the shared static field.'},
  {code:`class Constructor {
  final int x = 1;
  Constructor(int n) { x = x + n; }
}`,answer:'Compile-time error',why:'The final field was already initialized to 1 and cannot be assigned again. A blank final field could instead be assigned once in the constructor.'},
  {code:`class Main {
  int x = 5;
  Main() { this.x = 7; }
  public static void main(String[] args) {
    Main obj = new Main();
    System.out.println(obj.x);
  }
}`,answer:'7',why:'this.x refers to the current object’s instance field; the constructor changes it before the print.'},
  {code:`class Main {
  int x = 7;
  Main() { System.out.print(x + " "); }
  Main(int x) { this.x = x; System.out.print(x + " "); }
  public static void main(String[] args) {
    new Main(5);
    new Main();
  }
}`,answer:'5 7',why:'The parameter named x shadows the field in Main(int x), so its print uses the parameter 5. The no-argument constructor reads the field value 7.'},
  {code:`class Student {
  private Student() { }
}
public class CtorEx {
  public static void main(String[] args) {
    Student student = new Student();
  }
}`,answer:'Compile-time error',why:'The private constructor is accessible only inside Student. A factory method inside Student could create and return an instance.'},
  {code:`class Student {
  private Student() { }
}
public class CtorEx {
  public static void main(String[] args) {
    Student student = new Student();
  }
}`,answer:'Compile-time error',why:'This is a repeated slide question with the same access-control issue: another top-level class cannot call Student’s private constructor.'},
  {code:`class A {
  { System.out.println("1"); }
  static { System.out.println("2"); }
  A() { System.out.println("3"); }
  static { System.out.println("4"); }
  { System.out.println("5"); }
}
public class Main {
  public static void main(String[] args) {
    new A();
    System.out.println("6");
  }
}`,answer:'2 4 1 5 3 6',why:'Static blocks run first and in source order. Then the instance blocks, constructor and remaining main statement run.'},
  {code:`class Demo {
  int x;
  { x = 20; System.out.println("initializer 1: " + x); }
  { x = 30; System.out.println("initializer 2"); }
  Demo() { System.out.println("constructor: " + x); }
  public static void main(String[] args) {
    new Demo();
    System.out.println("Hello World");
  }
}`,answer:'initializer 1: 20 → initializer 2 → constructor: 30 → Hello World.',why:'Instance initializer blocks execute in their declaration order before the constructor body.'},
  {code:`class Demo {
  int x;
  { System.out.println("initializer 1"); }
  { System.out.println("initializer 2"); }
  Demo() { System.out.println("default constructor"); }
  void demo() { System.out.println("not a constructor"); }
  public static void main(String[] args) {
    Demo d = new Demo();
    d.demo();
  }
}`,answer:'initializer 1 → initializer 2 → default constructor → not a constructor.',why:'A method has a return type, even if it is void; therefore demo() is an ordinary method, not a constructor.'},
  {code:`class A {
  { System.out.println("1"); }
  static { System.out.println("2"); }
  A() { System.out.println("3"); }
  static { System.out.println("4"); }
  { System.out.println("5"); }
}
class Main {
  public static void main(String[] args) {
    new A();
    System.out.println("6");
  }
}`,answer:'2 4 1 5 3 6',why:'The relevant Java initialization order is unchanged: static blocks, then instance blocks, then constructor, then the next statement.'},
  {code:`class Myclass {
  private static int x = 10;
  static { x++; }
  static { ++x; }
  { x--; }
  public static void main(String[] args) {
    new Myclass();
    new Myclass();
    new Myclass();
    System.out.println(x);
  }
}`,answer:'9',why:'Start at 10, add 2 once during class initialization, then subtract 1 for each of the 3 constructed objects: 10 + 2 − 3 = 9.'},
  {code:`class Demo {
  int x;
  { x = 20; System.out.println("initializer 1: " + x); }
  { x = 30; System.out.println("initializer 2"); }
  Demo() { System.out.println("default: " + x); }
  void demo() { System.out.println("not a constructor"); }
  public static void main(String[] args) {
    Demo d = new Demo();
    d.demo();
    System.out.println("Hello World");
  }
}`,answer:'initializer 1: 20 → initializer 2 → default: 30 → not a constructor → Hello World.',why:'The blocks run in declaration order before the constructor. The method is called only when main explicitly invokes it.'}
];
function renderQuizBank(){
  return quizQuestions.map((q,index)=>'<details><summary>Question '+(index+1)+' · Predict the result</summary>'+C(q.code)+'<p><b>Answer:</b> '+escapeHtml(q.answer)+'</p><p>'+escapeHtml(q.why)+'</p></details>').join('');
}

const nav=document.getElementById('nav'),m=document.getElementById('m'),scrim=document.getElementById('scrim'),menuButton=document.getElementById('mb');
let h='<div class="nav-brand"><span class="nav-mark">CSC 2104 · Study guide</span><h1>OOP in Java</h1><p>Start from the basics. Learn by doing.</p></div><label class="nav-search"><span>Find a topic</span><input id="topic-search" type="search" placeholder="Search chapters…" autocomplete="off"></label><div class="nav-list">',lg='';
S.forEach((s,i)=>{if(s.g!==lg){h+='<h4>'+s.g+'</h4>';lg=s.g}h+='<a href="#'+s.id+'" data-i="'+i+'">'+s.t+'</a>'});
h+='</div><div class="nav-foot">'+materials.decks.length+' presentations · '+materials.slideCount+' slides · text and visual slides included</div>';
nav.innerHTML=h;
function show(){
  const id=location.hash.slice(1),i=Math.max(0,S.findIndex(s=>s.id===id)),s=S[i],previous=S[i-1],next=S[i+1];
  const archive=sourceDeckForLesson[s.id]?renderSlideArchive(sourceDeckForLesson[s.id]):'';
  const projectBrief=s.id==='projects'?renderProjectBrief():'';
  const back=previous?'<button type="button" data-target="'+previous.id+'">← '+previous.t+'</button>':'<span></span>';
  const forward=next?'<button type="button" data-target="'+next.id+'">'+next.t+' →</button>':'<span></span>';
  const lessonHtml=s.id==='exam-practice'?s.h.replace('<div id="quiz-bank"></div>','<div id="quiz-bank">'+renderQuizBank()+'</div>'):s.h;
  m.innerHTML='<div class="lesson-topline"><span>'+s.g+'</span><span class="dot">•</span><span>LESSON '+(i+1)+' OF '+S.length+'</span></div><h2>'+s.t+'</h2><div class="sub">Read the explanation, study the examples, then try the questions before opening their answers.</div>'+lessonHtml+archive+projectBrief+'<div class="pn">'+back+forward+'</div>';
  m.querySelectorAll('.pn button[data-target]').forEach(button=>button.addEventListener('click',()=>{location.hash=button.dataset.target}));
  nav.querySelectorAll('a').forEach(a=>a.classList.toggle('on',+a.dataset.i===i));
  const active=nav.querySelector('a.on');if(active)active.scrollIntoView({block:'nearest'});
  nav.classList.remove('open');scrim.classList.remove('active');menuButton.setAttribute('aria-expanded','false');
  window.scrollTo(0,0);
}
function filterTopics(){
  const query=document.getElementById('topic-search').value.trim().toLowerCase();
  nav.querySelectorAll('a').forEach(link=>{link.hidden=!link.textContent.toLowerCase().includes(query)});
  nav.querySelectorAll('h4').forEach(heading=>{
    let sibling=heading.nextElementSibling,visible=false;
    while(sibling&&sibling.tagName!=='H4'){if(sibling.tagName==='A'&&!sibling.hidden)visible=true;sibling=sibling.nextElementSibling}
    heading.hidden=!visible;
  });
}
function toggleMenu(open){
  nav.classList.toggle('open',open);scrim.classList.toggle('active',open);
  menuButton.setAttribute('aria-expanded',String(open));
}
addEventListener('hashchange',show);
show();
document.getElementById('topic-search').addEventListener('input',filterTopics);
menuButton.addEventListener('click',()=>toggleMenu(!nav.classList.contains('open')));
scrim.addEventListener('click',()=>toggleMenu(false));
