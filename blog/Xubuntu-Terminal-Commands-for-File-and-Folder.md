---
slug: xubuntu-commands-terminal
title: Xubuntu Terminal Commands for File and Folder Management
author: Ian Nguyen
author_title: Author
author_url: https://github.com/fineon
author_image_url: https://avatars.githubusercontent.com/u/38566281?v=4
date: 2022-07-26
tags: [xubuntu, cli]
---

# Xubuntu Terminal Commands for File and Folder Management

If you are using a Xubuntu distribution, check out this short list of essential terminal commands for managing files and folders. 

## Prerequisites

- Xubuntu installed on the computer.
- Access to Terminal or other command line/ shell application that can interact with the OS.
- Access to root (administrative) permissions, in case you need to execute an action as an administrator/ root user.

## Glossary

- **Directory**: the current path to the folder. If you look at your file manager's path, it would show a line: `/path/folder/subfolder` and the available files in the folder.
- **Terminal**: a type of command line application that accepts text input and process it, then displays the information in plain text. `cmd` on windows is a type of command line application much like Terminal. The difference is in what kind of command can be executed in each program and platform.

## File Directory

Using the following command lines, you can freely manipulate and navigate between files and folders using only keyboard, instead of graphic user interface and mouse. The following commands belong to the GNU's `[coreutil](https://www.gnu.org/software/coreutils/manual/coreutils.html)` package that is included in most Linux distributions like Ubuntu, Debian. 

The terminal will execute commands and modify files based on the current directory. You can check the current directory by looking at the input line. 

### File Navigation

Navigate to a folder: `cd`

```bash
$ cd Documents
# you are now in the Documents directory. See the Manipulation section to start editing files and folers
/Documents $ 
```

View all available files: `ls` 

```bash
$ ls
Desktop Downloads Documents
```

View all available and hidden files: `ls -a`

```bash
$ ls -a
.              Downloads      Desktop                    Documents
..             .emacs.d       .pki                       .thunderbird
.bash_history  .gitconfig     .profile  
.bashrc        .ICEauthority  .purpl
```

### File Management

Create a file: `touch filename`

```bash
# view available files in the current directory
$ ls
notes.txt
# create a new file using touch
$ touch todo.txt
# viewing all files again. We see the new file created in the current directory
$ ls
notes.txt todo.txt 
```

Remove files: `rm filename`

```bash
# remove a file in the current director
$ rm filename
# outputs a prompt in the terminal to confirm deletion
$ rm -i filename
# delete files recursively, including any subfolders and items contained in a parent folder
$ rm -rf foldername
```

Move one file from one folder to the other folder: `mv filename ./path-to-new-folder` 

```bash
# View all available files in the current directory
$ ls
. .. Documents contract.pdf
# Move the PDF file into the Documents folder
$ mv contract.pdf ./Documents
# Change directory into the Documents folder and we'll see the moved PDF file
$ cd Documents
. .. contract.pdf 
```

Copy: `cp filename directory`

```bash
# Create a copy file and move it into the specified path to the directory
$ cp mynotes.md ./Documents
# mynotes.md was duplicated
$ cd Documents
$ ls 
. .. mynotes.md
```

Rename a file: `mv -T currentfilename newfilename`  

You can use the same `mv` command to rename a file by following the syntax below:

```bash
# view all available files in the current folder
$ ls
note-123.txt
# you can use mv to rename a file, using the flag -T
mv -T note-123.txt my-note.txt
# the file was renamed
$ ls
my-note.txt
```

If you need a graphic user interface (GUI) for managing files, you can invoke the file manager's GUI in the current directory with a dot, like this:  

```bash
# This will open the Thunar file manager GUI in the current directory
$ thunar .
# VS Code will open files in the current directory
$ code .
```

Create a folder `mkdir`

```bash
# Creates a folder called Music
$ mkdir Music
# The folder Music is created in the current directory
$ ls 
. .. Music
```

Delete a folder `rmdir`

```bash
# Removes a folder called Music
$ rmdir Music
# The folder Music is deleted in the current directory
$ ls
. .. 
```

## Further Reading

The following articles provide additional commands that you can use in Xubuntu terminal for more advanced tasks:

- [35 Linux Basic Commands Every User Should Know - Hostinger](https://www.hostinger.com/tutorials/linux-commands)
- [Xubuntu documentation](https://docs.xubuntu.org/current/user/C/command-line.html)

Read more about the GNU coreutils package included in Xubuntu. It is a very comprehensive documentation of command lines and programs bundled: [https://www.gnu.org/software/coreutils/manual/coreutils.html](https://www.gnu.org/software/coreutils/manual/coreutils.html#mkdir-invocation)