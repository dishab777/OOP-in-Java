# ☕ OOP in Java: Comprehensive Learning Journey & Laboratory Solutions

Welcome to the **OOP-in-Java** repository! This repository captures a structured, progressive journey through Object-Oriented Programming concepts, core Java APIs, exception handling, file stream operations, multithreading, and package architecture.

Alongside the practical laboratory programs, the repository now also includes an **interactive OOP in Java Study Guide**. Use the guide to revise concepts, understand code examples, and prepare for practical examinations and viva questions.

---

## 📌 Table of Contents

- [Repository Overview](#-repository-overview)
- [Modules & Program Index](#-modules--program-index)
- [OOP in Java Study Guide](#-oop-in-java-study-guide)
- [Key OOP Concepts Mastered](#-key-oop-concepts-mastered)
- [Development & Execution Guide](#-development--execution-guide)
- [Repository Management](#-repository-management)

---

## 📖 Repository Overview

This codebase is organized sequentially into **13 distinct programming modules**, starting from foundational control structures and type conversions, progressing through core OOP pillars (Inheritance, Polymorphism, Abstraction), and concluding with system-level topics like Stream I/O, Exception Handling, Thread Synchronization, and Modular Package Design.

The repository contains two complementary learning resources:

1. **Laboratory solutions:** Java source files organized into 13 modules, with individual programs demonstrating concepts through practical implementation.
2. **Interactive study guide:** A browser-based reference covering the theory and important Java concepts corresponding to the practical work.

---

## 📂 Modules & Program Index

### 01. Programming Fundamentals
Focuses on basic syntax, control flow, array processing, and command-line arguments.

- `CommandLineAddition.java` – Command-line argument parsing and arithmetic calculation.
- `CommandLineCalculator.java` – Interactive multi-operation CLI calculator.
- `FibonacciSeries.java` – Iterative generation of the Fibonacci sequence.
- `LargestNumber.java` – Conditional logic to find maximum values.
- `MonthNameMapper.java` – Mapping numerical inputs to month names using switch-case.
- `SumDivisibleByFive.java` – Number filtering and conditional summation.

### 02. Type Conversion & Wrapper Classes
Covers primitive-to-reference type conversions, auto-boxing/unboxing, and safe parsing.

- `TypeConversionDemo.java` – Implicit and explicit type casting behaviors.
- `FloatConversionDemo.java` – Parsing floating-point primitives and wrapper instances.
- `SafeParsingDemo.java` – Error-resilient string-to-number conversions.
- `MethodSelectionDemo.java` – Demonstrating method resolution during type promotion.

### 03. Arrays & Algorithm Implementation
Custom array manipulation algorithms without relying on built-in collection shortcuts.

- `StudentMarksTabularDemo.java` – Sorting 10 student marks, converting to grades, and tabular printing.
- `ArraySquareSumDemo.java` – Array iteration, element squaring, and aggregate summation.
- `DigitCombinationsDemo.java` – Generating all unique permutations of 3 input digits.
- `ArrayOperationsDemo.java` – Bubble sorting, finding second-largest element, deduplication, and frequency analysis.

### 04. Classes, Objects, Methods & Constructors
Constructing blueprinted entities using object state, behavior, and lifecycle management.

- `ClassAndObjectDemo.java` – Basic class instantiation and method invocation.
- `BankDemo.java` – Encapsulated account operations (deposit, withdrawal, balance checking).
- `StudentArrayDemo.java` – Array of object instances and batch processing.
- `TestEmployee.java` – Constructor overloading and object initialization.

### 05. Method Overloading & Argument Passing
Understanding compile-time polymorphism and Java's parameter passing mechanics.

- `MethodOverloading.java` – Overloading methods by parameter count and datatype.
- `PassByValueDemo.java` – Verifying Java's strictly pass-by-value evaluation strategy.
- `RectangleDemo.java` – Method overloading applied to geometric calculations.

### 06. Inheritance & Access Modifiers
Reusing code and establishing class hierarchies using `extends` and access controls.

- `PlayerDemo.java` – Base `Player` class extended into specialized athletic roles.
- `PrivateAccessDemo.java` – Demonstrating variable scoping and encapsulation boundaries.

### 07. Multilevel Inheritance, Overriding & Polymorphism
Dynamic binding, runtime method dispatch, and deep inheritance trees.

- `WorkerPolymorphismDemo.java` – Polymorphic hourly and salary worker calculations.
- `TelephoneExchangeDemo.java` – Multi-level inheritance modeling telecom hierarchies.
- `EmployeePolymorphismDemo.java` – Runtime method overriding across multi-tier employee types.

### 08. Abstract Classes & Interfaces
Enforcing contracts and pure abstraction blueprints.

- `ToTestInt.java` & `InterfaceMathDemo.java` – Defining interface contracts and concrete implementations.
- `InterfaceMultipleMethodsDemo.java` – Implementing multiple interface contracts in a single class.
- `AccountFileDemo.java` – Abstract account structures integrated with persistence logic.
- `ConsoleUppercaseDemo.java` – Interface-driven text processing.

### 09. Console IO & File Handling
Working with character streams (`FileReader`/`FileWriter`) and byte streams (`FileInputStream`/`FileOutputStream`).

- `StudentGradeCalculator.java` – Interactive input processing via `Scanner`.
- `SentenceAnalyzer.java` – `BufferedReader` implementation for character, word, and vowel count.
- `EmployeeFileIODemo.java` – Writing abstract subclass calculations to text files using `FileWriter`.
- `FileCopyByteStreamDemo.java` – Raw byte copying using `FileInputStream` and `FileOutputStream`.
- `BinaryFileCopyDemo.java` – Copying binary files (images/executables), tracking byte sizes, and zero-value byte counting.
- `StudentManagementSystem.java` – Full CRUD terminal application with file persistence and binary backup generation.

### 10. Exception Handling
Gracefully handling runtime anomalies, standard exception hierarchies, and custom exceptions.

- `DivideByZeroDemo.java` – Catching `ArithmeticException`.
- `StudentArrayExceptionDemo.java` – Handling `ArrayIndexOutOfBoundsException`.
- `ModulusCalculator.java` – Exception handling in numerical modulus operations.
- `EmployeeValidationDemo.java` – Custom user-defined exception handling for salary and age constraints.
- `VehicleCollisionDemo.java` – Domain-specific exception throwing based on operational criteria.

### 11. Multithreading & Concurrency
Simultaneous thread execution, priorities, sleep state management, and thread synchronization.

- `MultithreadingDemo.java` – Creating threads via `Thread` extension and `Runnable` interface implementation.
- `EvenOddThreadsDemo.java` – Concurrent odd and even number generation across threads.
- `SynchronizedThreadsDemo.java` – Resolving race conditions on shared counter variables using `synchronized`.
- `ThreadPriorityAnalysisDemo.java` – Managing 5 threads with distinct priorities, sleep states, and `isAlive()` monitoring.

### 12. String Handling
Manipulating immutable `String` and mutable `StringBuffer`/`StringBuilder` objects.

- `StringAnalysisDemo.java` – Analyzing string metrics, character extractions, and case conversions.
- `StringBufferCapitalizeDemo.java` – In-place string modification and capitalizations using `StringBuffer`.
- `StringSearchDemo.java` – Substring search and index tracking algorithms.
- `ConsoleUppercaseDemo.java` – Command-line string transformations.

### 13. Packages & Modular Architecture
Encapsulating reusable components into user-defined namespaces.

- `mypackage/Calculator.java` & `PackageDemo.java` – Exporting and importing utility packages.
- `Balance/Account.java` & `AccountDemo.java` – Modular banking package declaration and external invocation.

---

## 📚 OOP in Java Study Guide

The repository also includes an **interactive, browser-based study guide** designed to complement the Java laboratory programs. It provides topic-wise explanations, Java code snippets, key points, important notes, comparison tables, and output-prediction questions with expandable answers.

### Topics Covered

| Section | Topics |
|---|---|
| Start Here | Course outcomes, syllabus map, assessment plan, recommended learning sequence |
| Foundations | Introduction to OOP, Java history and platform, classes and objects, four OOP pillars |
| Java Fundamentals | Program structure, variables, data types, access and type casting, operators, decision making and loops |
| Core OOP Building Blocks | Strings and arrays, methods, constructors, `this`, `static`, nested classes |
| Memory & Utility Classes | Garbage collection, wrapper classes |
| Inheritance & Polymorphism | Inheritance and `super`, method overloading, overriding, runtime polymorphism, abstract classes, `final`, interfaces |
| Advanced Structure | Packages, nested and inner classes |
| Exceptions & Threads | Exception handling, multithreading |
| Java I/O | Console input/output, character streams, byte streams |
| Exam Preparation | Slide quiz questions with worked output traces |
| Applied Practice | SkillBarter OOP project design and the complete mini-project brief |
| Revision | Last-minute revision and keyword checklist |

### Study Guide Files

Keep all four study guide files together in the same folder:

```text
OOP-in-Java/
├── index.html
├── style.css
├── script.js
└── course-materials.js
```

- `index.html` – Main study guide page.
- `style.css` – Styling, layout, and responsive presentation.
- `script.js` – Topic navigation, lessons, exam questions, and interactive behaviour.
- `course-materials.js` – Text from all 17 available presentations (562 slides, including embedded images for image-only slides) and the three-page mini-project brief.

### How to Open the Study Guide

1. Make sure all four files are present in the same directory.
2. Open `index.html` in a modern web browser.
3. Select a lesson from the topic panel. Use the topic search to find a chapter.
4. Open **Original lecture slides** or the mini-project brief inside a lesson to review the extracted source text.

No Java compiler, backend server, package manager, or build process is required to use the study guide.

### Study Guide Features

- Topic-wise navigation grouped into a recommended study sequence.
- Beginner-focused explanations, Java code examples, and comparison tables.
- Key-point, important-note, and revision callouts.
- Searchable topic list and responsive side panel.
- Worked exam questions with output traces and explanations.
- A complete OOP project walkthrough and all project ideas from the uploaded brief.
- Expandable slide-by-slide text and image-only slide content from the original presentations.
- Previous/next topic navigation.
- Light and dark appearance support based on browser/device colour preference.

---

## 🛠 Key OOP Concepts Mastered

1. **Encapsulation**: Safeguarding object internal state through package-private or restricted visibility and cohesive behavior.
2. **Inheritance**: Reducing code duplication through base-class reuse and structured type hierarchies.
3. **Polymorphism**: Utilizing method overloading (compile-time) and method overriding (runtime) for dynamic execution.
4. **Abstraction**: Separating specification from implementation using `abstract` classes and `interface` blueprints.
5. **Stream Processing**: Efficiently handling non-volatile data storage across character and byte representations.
6. **Thread Safety**: Eliminating data corruption in multi-threaded workflows using synchronized locks.

---

## 🚀 Development & Execution Guide

### Prerequisites

- **Java Development Kit (JDK)**: Version 17 or higher
- **IDE / Editor**: Visual Studio Code with Java Extension Pack (or IntelliJ IDEA / Eclipse)
- **Web Browser**: Any modern browser to open the interactive study guide

### Compilation & Execution Workflow

#### Standard Single-File Program

```bash
# Navigate to the target module directory
cd "03 Arrays"

# Compile
javac ArrayOperationsDemo.java

# Run
java ArrayOperationsDemo
```

#### Package-Based Program (Module 13)

Always compile and run package-dependent programs from the **root directory of the module** (e.g., `13 Packages`):

```bash
# Navigate to package root directory
cd "13 Packages"

# Compile package class
javac Balance/Account.java

# Compile main program
javac AccountDemo.java

# Run main class
java AccountDemo
```

---

## ⚙ Repository Management

This repository adheres to standard Git hygiene:

- `.class` bytecode files are automatically ignored via `.gitignore`.
- IDE workspace files (`.vscode/`, `.settings/`, `.project`, `.classpath`) are excluded from tracking.

```gitignore
# Compiled Java class files
*.class

# VS Code directory
.vscode/

# Build and IDE metadata
bin/
.classpath
.project
.settings/
```

---

**Happy Learning & Happy Coding! ☕**
