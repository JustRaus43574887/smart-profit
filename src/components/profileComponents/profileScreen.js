import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";

import SettingsProfile from "../../assets/images/settings-profile.svg";

import "../../assets/styles/profile.scoped.css";
import Preloader from "../loaders/Preloader";
import { useTranslation } from "react-i18next";

import frPurple from "../../assets/images/fr_purple.svg";
import spBlue from "../../assets/images/sp_blue.svg";
import fpGreen from "../../assets/images/fp_green.svg";
import mpYellow from "../../assets/images/mp_yellow.svg";
import { toast } from "react-toastify";

function ProfileScreen() {
  const { t } = useTranslation();

  const { user, settings, token } = useContext(AuthContext);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(false);

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (settings && settings.photo) {
      setAvatarLoading(true);
      fetch(settings.photo)
        .then((res) => res.blob())
        .then((res) => {
          setAvatar(res);
          setAvatarLoading(false);
        })
        .catch((e) => {
          toast(e.message, { type: "error" });
          setAvatarLoading(false);
        });
    }
  }, [settings]);

  const [form, setForm] = useState({
    full_name: "",
    country: "",
    email: "",
    telegram: "",
    skype: "",
    phone: "",
    new_password: undefined,
    repeat_password: "",
    old_password: "",
  });

  useEffect(() => {
    if (user && settings)
      setForm({
        ...form,
        user_id: user.id,
        skype: settings.skype,
        telegram: settings.telegram,
        email: settings.email,
        phone: settings.phone,
        full_name: user.full_name,
        country: settings.country,
        old_password: "",
      });
  }, [user, settings]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async (e) => {
    e.preventDefault();
    setFetchLoading(true);
    const formData = new FormData();

    if (
      form.new_password &&
      form.new_password.length !== 0 &&
      form.new_password !== form.repeat_password
    ) {
      setFetchLoading(false);
      return toast(t("toast:NEW_PASSWORD_ERROR"), {
        type: "error",
      });
    }

    if (form.old_password.length === 0) {
      setFetchLoading(false);
      return toast(t("toast:OLD_PASSWORD_ERROR"), {
        type: "error",
      });
    }

    if (avatar) formData.append("image", avatar);

    for (let [key, value] of Object.entries(form)) {
      if (value && value.length !== 0) {
        if (key !== "repeat_password") {
          formData.append(key, value);
        }
      }
    }

    for (let [key, value] of formData.entries())
      console.log(key + ": " + value);

    const response = await fetch("https://api.smart-profit.info/settings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await response.json();

    if (!response.ok) {
      setFetchLoading(false);
      return toast(response.statusText, { type: "error" });
    }

    if ("error" in result) toast(result.error, { type: "error" });
    else if ("success" in result) {
      toast(t("profile:TOP_DESCRIPTION_SAVE_SETTINGS"), { type: "success" });
      window.location.replace("/");
    }
    setFetchLoading(false);
  };

  const handleChangeAvatar = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <>
      {(fetchLoading || avatarLoading) && <Preloader />}
      <div className="profile_screen">
        <div className="profile_top_block">
          <img src={SettingsProfile} alt="settings-profile" />
          <p className="profile_top_text" style={{ marginBottom: 0 }}>
            {t("profile:TOP_TITLE")}
          </p>
        </div>
        <div
          className="profile_user_block"  >
          <div className="profile_user_content">
            <div className="profile_img_block">
              <div style={{
                position: "relative", width: 300, height: 300, borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                margin: "0 auto",
                padding: 25
              }}>
                <div style={{
                  position: "relative", width: 250, height: 250, borderRadius: "50%",
                  backgroundColor: "rgba(168, 168, 168, 0.43)",
                  margin: "0 auto",
                  paddingTop: 25
                }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={avatar && URL.createObjectURL(avatar)}
                      className="profile_img"
                      style={{ maxWidth: 200, height: 200, objectFit: "cover", borderRadius: "50%" }}
                      alt=""
                    />
                    <img src={
                      (() => {
                        if (settings) {
                          switch (settings.status) {
                            case "Free":
                              return frPurple;
                            case "Start Profit":
                              return spBlue;
                            case "Fixed Profit":
                              return fpGreen;
                            case "Maxi Profit":
                              return mpYellow;
                            default:
                              return spBlue;
                          }
                        }
                      })()}
                      style={{
                        position: "absolute",
                        width: "100px",
                        right: "-5%",
                        bottom: "-25px"
                      }}
                      className="status__image"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <p>
                <button
                  className="profile_img_edit"
                  style={{ position: "relative" }}
                >
                  <label
                    for="imagePicker"
                    class="custom-file-upload"
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                  />
                  {t("profile:TOP_DESCRIPTION_CHANGE")}
                </button>
                <input
                  onChange={handleChangeAvatar}
                  id="imagePicker"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  multiple={false}
                />
              </p>
            </div>
            <div className="profile_user_items">
              <div className="profile_items_content">
                <div className="profile_inputs">
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_NAMEANDSURNAME")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_EMAIL")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_SKYPE")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="skype"
                        value={form.skype}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_COUNTRY")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_TELEGRAM")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="telegram"
                        value={form.telegram}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_PHONE")}
                      </p>
                      <input
                        type="text"
                        className="profile_user_input"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_NEWPASSWORD")}
                      </p>
                      <input
                        type="password"
                        className="profile_user_input"
                        name="new_password"
                        value={form.new_password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_REPEATNEWPASSWORD")}
                      </p>
                      <input
                        type="password"
                        className="profile_user_input"
                        name="repeat_password"
                        value={form.repeat_password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="profile_user_item" style={{ padding: 5 }}>
                      <p className="profile_user_text">
                        {t("profile:TOP_DESCRIPTION_EXISTINGPASSWORD")}
                      </p>
                      <input
                        type="password"
                        className="profile_user_input"
                        name="old_password"
                        value={form.old_password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="profile_button_block"
                  style={{ margin: 0, marginTop: 20 }}
                >
                  <p className="profile_user_text" style={{ fontSize: 14 }}>
                    {t("profile:TOP_DESCRIPTION_HELP")}
                  </p>
                </div>
                <div className="profile_button_block">
                  <button
                    onClick={handleSave}
                    disabled={fetch.loading}
                    className="profile_user_button"
                  >
                    {t("profile:TOP_DESCRIPTION_SAVE")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
