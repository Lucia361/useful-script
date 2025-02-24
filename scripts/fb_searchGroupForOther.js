import { showLoading } from "./helpers/utils.js";

export default {
  icon: '<i class="fa-solid fa-users-line fa-lg"></i>',
  name: {
    en: "Facebook - View your friends's joined groups",
    vi: "Facebook - Xem các nhóm bạn bè tham gia",
  },
  description: {
    en: "Know about your friends's joined groups on facebook",
    vi: "Biết bạn bè của bạn đang tham gia các nhóm nào trên facebook",
  },

  onClickExtension: async () => {
    let url = prompt("Nhập link facebook bạn bè (hoặc của bạn): ");
    if (url == null) return;

    let { setLoadingText, closeLoading } = showLoading("Đang chuẩn bị...");
    try {
      let { getUidFromUrl, getYourUserId, getFbdtsg, searchAllGroupForOther } =
        UsefulScriptGlobalPageContext.Facebook;

      setLoadingText("Đang lấy uid, token...");
      let other_uid = await getUidFromUrl(url);
      let uid = await getYourUserId();
      let dtsg = await getFbdtsg();

      setLoadingText("Đang tải danh sách group...");
      let allGroups = await searchAllGroupForOther(
        other_uid,
        uid,
        dtsg,
        (groups, all) => {
          setLoadingText(
            "Đang tải danh sách group...<br/>Tải được " + all.length + " group."
          );
        }
      );
      console.log(allGroups);
    } catch (e) {
      alert("ERROR: " + e);
    } finally {
      closeLoading();
    }
  },
};
