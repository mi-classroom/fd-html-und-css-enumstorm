"use strict";

const mainMenuOpenButton = document.querySelector('[data-js-main-menu-open-button]');
mainMenuOpenButton.addEventListener(
    "click",
    toggleMainMenu
);

function toggleMainMenu() {
    document.querySelector('[data-js-page-main-navigation]').classList.toggle('is-open');
    document.querySelector('[data-js-main-menu-open-button]Ä').classList.toggle('is-open');
}



const tabNavigations = {};

function setupAllTabNavigations() {
    const tabNavigationBars = document.querySelectorAll('[data-tab-navigation-navigation-bar]');
    tabNavigationBars.forEach(function (tabNavigationBar) {
        const navigationId = tabNavigationBar.getAttribute('data-tab-navigation-id');
        const tabsContainer = document.querySelector('[data-tab-navigation-tabs][data-tab-navigation-id="' + navigationId + '"]');
        const selectedTabName = tabsContainer.getAttribute('data-tab-navigation-selected-tab-name');

        const tabNavigationBarItems = {};
        for (const tabNavigationBarItem of tabNavigationBar.children) {
            const name = tabNavigationBarItem.getAttribute("data-navigation-bar-tab-name");
            tabNavigationBarItems[name] = tabNavigationBarItem;

            tabNavigationBarItem.addEventListener(
                "click",
                function() {
                    tabNavigationChangeTab(navigationId, name);
                }
            );
        }

        const tabsContainerItems = {};
        for (const tab of tabsContainer.children) {
            const key = tab.id;
            tabsContainerItems[key] = tab;
        }

        const tabNavigationData = {
            selectedTabName: selectedTabName,
            tabNavigationBarItems: tabNavigationBarItems,
            tabsContainerItems: tabsContainerItems
        };


        tabNavigationBarItems[selectedTabName].classList.add("selected");
        tabsContainerItems[selectedTabName].classList.add("is-active");
        

        tabNavigations[navigationId] = tabNavigationData;
    });
}

function tabNavigationChangeTab(navigationId, tabName) {
    const tabNavigationData = tabNavigations[navigationId];

    tabNavigationData.tabNavigationBarItems[tabNavigationData.selectedTabName].classList.remove("selected");
    tabNavigationData.tabsContainerItems[tabNavigationData.selectedTabName].classList.remove("is-active");

    tabNavigationData.tabNavigationBarItems[tabName].classList.add("selected");
    tabNavigationData.tabsContainerItems[tabName].classList.add("is-active");
    tabNavigationData.selectedTabName = tabName;
    window.location.href = '#' + tabName;
}

setupAllTabNavigations();