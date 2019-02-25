export const containBackspace = text => text.startsWith('bs_');

export const removeBackspacePrefix = text => text.substr(3);
