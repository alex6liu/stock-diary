import settings from 'electron-settings';
import fse from 'fs-extra';
import path from 'path';

export const docDir = path.join(__dirname, '../../../stock-diary');
const settingsPath = path.join(docDir, 'settings.json');
fse.ensureFileSync(settingsPath);

settings.setPath(settingsPath);

export default settings;
