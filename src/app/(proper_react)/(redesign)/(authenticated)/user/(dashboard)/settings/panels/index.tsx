/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {
  SettingsPanelEditInfo,
  SettingsPanelEditInfoProps,
} from "./SettingsPanelEditInfo";
import {
  SettingsPanelNotifications,
  SettingsPanelNotificationsProps,
} from "./SettingsPanelNotifications";
import {
  SettingsPanelManageAccount,
  SettingsPanelManageAccountProps,
} from "./SettingsPanelManageAccount";
import styles from "./Panel.module.scss";
import { TabType } from "../View";

export type SettingsProps = SettingsPanelEditInfoProps &
  SettingsPanelNotificationsProps &
  SettingsPanelManageAccountProps & {
    activeTab?: TabType;
  };

function Panel(props: SettingsProps) {
  switch (props.activeTab) {
    case "edit-info":
      return <SettingsPanelEditInfo {...props} />;
    case "notifications":
      return <SettingsPanelNotifications {...props} />;
    case "manage-account":
      return <SettingsPanelManageAccount {...props} />;
    default:
      return <SettingsPanelEditInfo {...props} />;
  }
}

function SettingsPanel(props: SettingsProps) {
  return (
    <div className={styles.panel}>
      <Panel {...props} />
    </div>
  );
}

export { SettingsPanel };
