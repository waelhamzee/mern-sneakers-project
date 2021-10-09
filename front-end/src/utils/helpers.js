export const n1 =
  "https://static.wixstatic.com/media/84770f_deb028dbaa0944aabb8ddd538d2ed598.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_deb028dbaa0944aabb8ddd538d2ed598.webp.png";
export const n2 =
  "https://static.wixstatic.com/media/84770f_fe645b9caa874735ad2b817f5ee77551.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_fe645b9caa874735ad2b817f5ee77551.webp.png";
export const n3 =
  "https://static.wixstatic.com/media/84770f_054990a92c9e4b28bcc929a20b034302.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_054990a92c9e4b28bcc929a20b034302.webp.png";
export const n4 =
  "https://static.wixstatic.com/media/84770f_3ed8b7af19324b2fa5215afa327aefb7.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_3ed8b7af19324b2fa5215afa327aefb7.webp.png";
export const n5 =
  "https://static.wixstatic.com/media/84770f_a76d377940e049d0baaf2a10265711f5.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_a76d377940e049d0baaf2a10265711f5.webp.png";
export const n6 =
  "https://static.wixstatic.com/media/84770f_732eed9a72de449a853444132e1cda25.png/v1/fill/w_435,h_435,al_c,q_90,usm_0.66_1.00_0.01/84770f_732eed9a72de449a853444132e1cda25.webp.png";
export const shoe1 =
  "https://static.wixstatic.com/media/84770f_947e5c5f36f841908cc0472b141492f1~mv2.jpg/v1/fill/w_1266,h_950,q_90/84770f_947e5c5f36f841908cc0472b141492f1~mv2.webp.png";
export const shoe2 =
  "https://static.wixstatic.com/media/84770f_894bbd9b59ec4b6581ab5c9b6b310743~mv2.jpg/v1/fill/w_1266,h_950,q_90/84770f_894bbd9b59ec4b6581ab5c9b6b310743~mv2.webp.png";
export const shoe =
  "https://static.wixstatic.com/media/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.jpg/v1/fill/w_1266,h_800,al_b,q_85,usm_0.66_1.00_0.01/84770f_e79251bac8554e33b08eb677c53a8e87~mv2.webp.jpg";

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "color") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
export const reloadFunction = () => {
  const timeout = setTimeout(() => {
    window.location.href='/';
  }, 1300);
  return () => clearTimeout(timeout);
};
