STYLE_FILES_PATTERN="**/*.scss"
CHANGED_STYLE_FILES=$(git diff --name-only HEAD $STYLE_FILES_PATTERN | xargs)

noWarningNoError() {
  tput setaf 2;
  echo "✔ No StyleLint warnings or errors\n"
  tput sgr0;
}

if test -z "$CHANGED_STYLE_FILES"
then
  noWarningNoError
else
  echo "> Checking $CHANGED_STYLE_FILES"
  npx stylelint $CHANGED_STYLE_FILES && noWarningNoError
fi
