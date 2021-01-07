module.exports = {
	HELP: `keyhole [--recursive|-r] [--unused|-u] <languages-path> <path>

    -r  -   (r)ecursively scan directory

    -u  -   Show (u)nused keys mode
            This will show all keys that are available in translation but are not used in any files.

    The default behaviour is to show untranslated keys.

<languages-path> should be the singular path (directory or file) to query the keys for, no matter the mode.

<path> should be a directory to search all files in (will not scan subdirectories by default without -R enabled), a single file to scan, or a list of files, specified as follows:

keyhole [...options] <languages-path> <path1> [...path2, path3, etc.]`
};
