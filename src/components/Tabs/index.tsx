import type React from "react";
import { useState, useEffect } from "react";
import Icon from "../Icon";
import {
  TabsWrapper,
  TabsNav,
  TabsList,
  TabsTab,
  TabsContent,
  TabPane,
  AddButton,
  CloseButton
} from "./styled";
import type { TabsProps } from "./types";

const Tabs: React.FC<TabsProps> = ({
  activeKey,
  defaultActiveKey,
  items = [],
  centered = false,
  type = "line",
  size = "middle",
  mode = "horizontal",
  tabBarStyle,
  tabBarGutter,
  destroyInactiveTabPane = false,
  animated = true,
  hideAdd = false,
  addIcon = <Icon name="pluscircle" />,
  onChange,
  onTabClick,
  onEdit,
  className,
  style
}) => {
  const [currentKey, setCurrentKey] = useState<string>(
    activeKey ?? defaultActiveKey ?? items[0]?.key ?? ""
  );

  useEffect(() => {
    if (activeKey !== undefined) {
      setCurrentKey(activeKey);
    }
  }, [activeKey]);

  const handleTabClick = (key: string, e: React.MouseEvent): void => {
    if (activeKey === undefined) {
      setCurrentKey(key);
    }
    onChange?.(key);
    onTabClick?.(key, e);
  };

  const handleEdit = (
    targetKey: string | React.MouseEvent,
    action: "add" | "remove"
  ): void => {
    onEdit?.(targetKey, action);
  };

  const renderTabBar = (): React.ReactNode => {
    return (
      <TabsNav $type={type} $size={size} $mode={mode} style={tabBarStyle}>
        <TabsList
          className="tabs-nav-list"
          $centered={centered}
          $mode={mode}
          data-testid="tabs-list"
        >
          {items.map(item => (
            <TabsTab
              key={item.key}
              $active={currentKey === item.key}
              $disabled={item.disabled}
              $type={type}
              $mode={mode}
              onClick={e => {
                if (!(item.disabled ?? false)) {
                  handleTabClick(item.key, e);
                }
              }}
              style={(tabBarGutter != null) ? { marginRight: tabBarGutter } : undefined}
            >
              {item.icon}
              {item.label}
              {(type === "editable-card" && item.closable !== false) && (
                <CloseButton
                  onClick={e => {
                    e.stopPropagation();
                    handleEdit(item.key, "remove");
                  }}
                >
                  {item.closeIcon ?? <Icon name="cross" />}
                </CloseButton>
              )}
            </TabsTab>
          ))}
        </TabsList>
        {type === "editable-card" && !hideAdd && (
          <AddButton onClick={e => { handleEdit(e, "add"); }}>
            {addIcon}
          </AddButton>
        )}
      </TabsNav>
    );
  };

  const renderTabContent = (): React.ReactNode => {
    return (
      <TabsContent $animated={animated === true || (animated as any)?.tabPane}>
        {items.map(item => (
          <TabPane
            key={item.key}
            $active={currentKey === item.key}
          >
            {(currentKey === item.key || !destroyInactiveTabPane) && item.children}
          </TabPane>
        ))}
      </TabsContent>
    );
  };

  return (
    <TabsWrapper
      className={className}
      style={style}
      $centered={centered}
      $mode={mode}
    >
      {renderTabBar()}
      {renderTabContent()}
    </TabsWrapper>
  );
};

export default Tabs;
