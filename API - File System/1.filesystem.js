const fs = require('fs');

/*
The fs module provides an API for interacting with the file system in a manner
closely modeled around standard POSIX functions.
All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument.
The arguments passed to the completion callback depend on the method,
but the first argument is always reserved for an exception.
If the operation was completed successfully,
then the first argument will be null or undefined.
*/


/*Filesystem Flag
    'a' - Open file for appending. The file is created if it does not exist.
    'ax' - Like 'a' but fails if the path exists.
    'a+' - Open file for reading and appending. The file is created if it does not exist.
    'ax+' - Like 'a+' but fails if the path exists.
    'as' - Open file for appending in synchronous mode. The file is created if it does not exist.
    'as+' - Open file for reading and appending in synchronous mode. The file is created if it does not exist.
    'r' - Open file for reading. An exception occurs if the file does not exist.
    'r+' - Open file for reading and writing. An exception occurs if the file does not exist.
    'rs+' - Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
    This is primarily useful for opening files on NFS mounts as it allows skipping the potentially stale local cache. It has a very real impact on I/O performance so using this flag is not recommended unless it is needed.
    This doesn't turn fs.open() or fsPromises.open() into a synchronous blocking call. If synchronous operation is desired, something like fs.openSync() should be used.
    'w' - Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx' - Like 'w' but fails if the path exists.
    'w+' - Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    'wx+' - Like 'w+' but fails if the path exists.
*/
