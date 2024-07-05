const valery_photo = document.querySelector(".valery_photo");
const menu = document.querySelector(".menu");

const valery_burger = document.querySelector(".valery_burger"),
burder_close = document.querySelector(".burder_close");


const my_stack_json = [
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_HvooYSSgtHfKLKuRMAMPJzmzCfaYI6z1lwf-1SYvwV02NtJ-mHqcnxJAWme09AhVluulw5QUUaPDi0KDMe4Muu7B6eYf_qfGaUIAu1-1NEfB-0WEArETFR-5nV3J9yRHQaf3YWLLCM4HDNkyTbYSGRDAAxwvcHmcaXd15Lp7tdTck2xr264-9GytO-3vp_n6Ps4xeDzQuNhM0RgEjvI0btNVGEN6q_t8AUWopUUoUC3MycrgUViLbTeNMHcMQh5qrXiqqeSAZc872Kr7EQzpDi46NGaxkqsTJh4nFPbxrGT6JDgGeWlk4ztAT8wNec3ErAyqha83OWczp8cojLJsiciUrmYvvOsGBvrYCJW1N0KAOBz3nQ2kQy2wXQIID1iowX-AeKA7kSdUBSBSZ123w3_LZK01wqsmWlVCdNJVjABvdqvy8cfc9_jBFeM_VhVmnwJ0fMeZiRmDqDlD6NubtKkgun985uxm_B3bpqCRDiAJ7TW3Mjm5DlhEyeyGVnFjnGBsMgQsgTbZgWvkuEHcxroYugd_HuuOQTBex8GH1RkvQMdlsfVDzn__lSMUFh2yx0OIu7FwsRsUU27gKTnXZnJmJjc5PFJvlQRRbwX6NTYFJicUPNxzPk5BycRZucYDMapYUnNHFXNDhL44oZsrK2pkxJZmRmDlKFpcbiU59vwWpfi1zv6Lnn4VdSgz0UFJSxDYoJEam6uzZNf-TQfAP314nX1vg_kuEI0gofnBaz62B_PY9r2AVLQIV_jgfpAHZmS8PCQRAXjI1GiYkvXzochtpRoBM6Z6DzNCxUvnW1lF8I73SttG5GdE6ZdmPbqqSn9AoOF7w3hwKyUREtVg13J7IqGl-VCe8S_TyoTjoeO9fSt5Nekf2j9qDGZjPnD-iKk4Mfjhzwjes49iu8ndkdlRGVWZpsa-ZvILhnmhNnXJIztsElyw5KCFu1RXcRd3BMFxpkNdCdYWmEMls1VxUT-nyOW6PbMJbSN9nzmWBlGJ47pZaqeO3u5cbZUrAZAsNhGveHEe1USD3JDREnjgrvb5C1RFTwIn_vJYKQT_xW8_uAlVHuQM0VlohbhutabprNHckbwbSskkCILKS8n2nNfaZ5AF5zsbiW3qVZqn5pdfLEwsIo37Gv0NRgBjkqkE_jUDSrARmSf-JExgVZiUfEogdIHuVXcgMv_yBMjg6FmJCM2OevKGrmVQENUPvbWyccSKBO1C9X0vrbTo30tP0cuIsooQYRkUgSTg_-SIKLy84647p7BpHIDjZKMeYLG8nTpz2yowRMfLxWwg0q-A-Ns54k3nE2HeIIsPrLFxoILX_chm919K5Y11zVM6VIVceKzM1AwK1Wumxlwyft2KJ4Kx2jNEQHmHQl4xhtKimnibuhsOzMaiJrtoN2wcIeSCuNINzIjcDYogXuUoh2OQmAKsJrqplbSC_0YwdeFPeil77CiSXyGE8N4NFoqh_lr3aOpVVc7jD6PqkrhLgXsj1PWXl5YBOpxxzIt0buZIy-5opR1X87E0GnLCAeLJmlQP01V6fapngEqJ6zBVlBT2gODoPgtAnDF2kCecGVKAiJ1LKBusiUpG1x81tVzsMB88bZLpDk7_3JfliaDffGzabWucUABwkaScu7yL1-ByeZ8LC1PEixfg=w1526-h963",
        img_url: "icons/web.png",
        title: "Вёрстка сайтов",
        more: "Занимаюсь вёрсткой сайтов – HTML (включая Pug и Haml) и CSS (включая SCSS; Bootstrap, Tailwind, UIKit и другие), Javascript."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_E23J7zptigqRiAPt1FcptETBu5DtQwjzh2GF_0GluK-xudLTRRmPfr7D-Ryg2DFQsGLVA-N4stLEsD5yoMdgUG4D2yGzB8XghCJiHSf9-I05LJc429qL1m5gKUV72zac8xUL9EVa1lT3Ihp-CqXrFob5WqG29yXJlsEzp3zy68insaIZ0ySQCgkNEcUj8SaHn6T4N4UF6m4GdEvSOFmxNq6E9fcGdQMKqTNUrGABSrwKCfyYlUc1aB1xtwUrTB1GgL9_p9APuXLVIeKkYtqApvIp7C5c5tS_jSHQOjLbm9JzScyqV9lO6B02i98_kEcrXDwmd57v40SA7NXe4YdBpQlqRe5xKuvwZVIKsOSzlm-Pq2fioHJhnnA_Cw0_itbCJOHZqs4f8_beHDZQYCcLCfX75TXrbe27Xcpo6doUhiIpCE6k7VYGLkX-DQrU6gcqUyde9GbUTw3OBTK76uksO4KCOiLEiPqhn3INY8te7AW8z1o2ev2dYBzx8FgltMw6KoZFmGfwobikQWWJkUk35pbBMhT4kNXbazlUIYjCmjRehvPGHRNTXDgLeP_pqo1A2w5bNm_lZnYS0zjnL2LaR3XThtSUruE1eDq37adfEM08YP1SPp7L44m1R2CdD2K0ryh6ZBZcosrN96W7IxokLwXk1zWOk80s-V1j71lHvhKyAWDWLMKVAULZ6wMBQW6YWsPH7--dBxVrpsJjOz7XvSnaTwbsbjLBcUatMY3uC4NArfCZXstRYY0MLr93tmYWAQQ9psE-FkqeeCmhrJ-bpUzy01aFY9kUtA0AGOjKCo_MSiBiA_z6OOY8v1gfQNMc84XsRiLmId039M-b-HtCXIKJoi69G0S-hcOLuwICrTF0vMC7zQt1FiupNKQhsYDJYgjAycHvDNfg34UM97LBereE4PcDB0wl_4tAl8YM3q9XyIDQX5M2kF_RhJG1TpJ5hCiih-S3sPbKCdmaWFpOOOI61imQ99yFIot7i6DU40mpcRsu1JFjeSgLBKeDtiPlfubWq18HPax1x6oGV8WEi9edXKtcvcvzyLeRtMtKLWmQTBuExDWkDOAUEldKMu9PclE07fm25QKsOfzYJfOcvDhEj2mq2nfM-81dVodhAiNEy6RkazmMV2U70r3By5hF08wMAxmQ4nCnjkteEG8GJxsUaZdgDzc7h96zUChAU_ZZ1vYF4_Sl-Oy3itDHhSkKzLqoMvQEqi6-fxumdwHIaR-lIKMu912rPF3t0vPJHJV_5EgVsQ6tvrSJYBXGC5A8QGxUWeAatj19fK-qWos7csUF50RQE70ADzCrsK0K4pZjsUX5SAKbHjt0nuIblwTIaQoZxfTaCI4EtQPYRBeaE8UN0g-IJ__NOmdLZ-78j2Tiic1Qwi60xtt7E8zge7p7NLnl5CmCv-KPE0g6y-yPt4yW3N1WN5dvu5q4lOopasqrRqmZ7NdZwydIQQPY_my2MjER7IsryGCPkn9Ay3cYE1YIYaCiwr908sIytPlbS82VjwESYFYloA5Kze_L_AeVG75H4EBBzTe08cgSBEzsGvK5Lh4zR5pBNHj1S2n58Osagnd_OReTy2CGly5FftgcPafnY4axGGyJhfl7yXhZkj4PVTj7OAO62KtpiISSD1H0SO52LoQek=w1526-h963",
        img_url: "icons/js.png",
        title: "Javascript",
        more: "Использую как чистый Javascript так и технологии на его основе: Vue.js, Mithril.js, Nodejs, Transformers.js, Playcanvas, Brain.js. Реже всего Assemblyscript (Webassembly)."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_HxF0cmbuKp45YPLNjmNZTp0fB9djMzkHO3MAI5H7ImBNVjQCfUfTXU-zS2k-Aefs11Ycn2S_o-bh7XesGLGEOq6Uif1sV5HZwqbd4bXQ8GikwG77VuvJLaekr6hI8AlgfrDbFHaShdWgTyPk-behKN5xQiYJrzEmUm6HE8F0zizKWrYhXRGArI9AEAB_0ynukXT5aqC6AlkxiSzNWm6ylw2Kt1z8_VQ1IJJV_eIzSs5PS4PRw46w0jnFOPmQ89JjZBSlu59SWzPrSU7hVnIgxDfCB9bMCg5MNwpUD8nmyBIORmA6Dhh4KUSvqY0rM4evqI44uRB74u0p09BHq-bQncTbDyUr20wg_UnWARIxPyk1hjkL3ztWywfGwhIDVQXu6-78UWlnc6-cht2EFj0dR0md73G5c--NB4y8IIu3aNWKlg-_VOIHzSiHYZ1y8IBYzKpxWopEeFUZY-KC7jtMv1U-w5wTxQE6R1iBXTboT4GVOQkFj1RAukaYpoo7HSODMWtr1LsObXaprZf_CJshgaRXUgDypDdzQoS-66udjPBj7MbtOE_Kh_DAZ0aMR_HqxiUAhIoGJnUmgYdU-b45JOPMuD_XEZHZ2YSPV9WPjlOz8v0IDJYvHNzHgfqazOqfPmAEiL1UiCQQTh-SG0dMa-sx3O_RZqVyzjoMHEiVokc8IB9HcrjNjrcSNtP8TIEg75_3DSq4BsPU9-51853h5_6yFp40ZuDZiTEfUuZaBFiJnrNhI_be3fVe-8THCaGVKci_oEFyw7_TwkdjnkKBfOFr8XVdZ8Y5wQFPqWKIzeZBeEVBC89CDoXpU8lWWQbcAdAK1xWEqOZtSGCxnleSuzGVFL4Y8D1ReMvsPr1AJ7ofiA6uENsSU6Mrj52hu-e-hRTLLA2yal3jELfnpisbKKvTFmzXZPvfEUgX6HO2PlN8BFBBPjZKoa2xR4FIOFNO2Ndzozk4hR6nCk2QX9P0GBjkuGrCZ_F0pBlpncEk9aOolEncdYJ6qjKH1sfqZzxyFmY3eeKFmHii9SD3RQXHnbUI-iJFJuT8XDt50b4Vrrw5DlF8La_Z07Gfaft79Srmy_5MHr99i48Xp-lzLOJmpnv788UcmzJir4RmCfWynrThlNZVeTVjG-lriAB_wdIz_IDNEkfarnklDZixJSlPWTGxF9uZtelYfAhjfRirrXnIrIggaht4AExrct8f1RV2508I0X88mnLKJKYHGOcmnlzmxpWXvccp7_aehnAJMsNqjUJxePV3UoKwqMmOaEtAUFnWagesPpqTq0LwkroP8va7yN_vCt_xHfHtaZ-tyy7mCPcdrfjkjEKOctMpTauEdxx-jmdnGND2DFBT-JuuY2SEzNX3-lfzqgMM0oSNi_MGCnB0XllSovFdJRvAzSXzg_9Ea7bOGOyWCwXenPqt2mpMGr6sS-ffrtDnFZ3MGASSKVlE4Oz1G378LX52nGfIvl0kA-jwMA9YPujhM2_PSvL46Jvtmp2T54HKmnFiDcjSAyatsFgS3czLbtHdhMJ_yIRPw19LcY6LPmJ_1jRsOCzItkPssm8YMZDcEXAiXvUl8nmyDpazIAnKK2D_4gJEkJXxeuxLkH1F6lRZ0g73djD41hExw8mfDJf-7PR2w3imtBZYKB1ag=w1920-h963",
        img_url: "icons/dart.png",
        title: "Dart",
        more: "Использую Flutter для создания в первую очередь Android приложений, также Web приложений."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_EP36_yldoxBCySHdviWimKgw5H5wZBeUPKC72zYJfJSDbeVeQv9zUlVTL0WyF6oWsGOqF9DB1UOSKwMo4bUSbwB1knYF4rIsto-1HhXN3kRFtWQzDt-tA4AR33vjDQz06zPOx3ddizeKObnXQ6k1G7NEyeGTLngldsf7H9x-m7PWRL_kJeI7YwqColSrOZsYxJ8kUYyNnalWmfUhYf3SzbwkjypCcA5v4JWkgvfZQR21UAAxCq9m8gBinNTBrD7Yoo2_XuZuQkuuVvze1Y19-iXhlNwzgIFLEUNRJUlFfqnuwcxztXVyVck4RWVIW3FpiV1VmfEoa7f_JOzZ83SnvpmCgJDjes4vteOcJ-JN4Wu6ILpycEVNZSkQsZPcM33QEtRBaWVMVYqm1dgIIemyAeYaClJV6dISbXVid2s_-WXYuRfN1z6eIZc4FMS_sMgdjJztF-8bdeiOk2MJ8brJPqKsBXZYLzIGrpdSkhEi_t_nuOaJlLGeTfLTtM_t6T2RpeKzbz_fR4OmVHuolvBQJLUxVL9Icasbdbz1J664Ogtl6ZhIg7ibf6Al35ffQYW4JLq5tUIPzldlb0a_cvDodsWJhxw0dMiDCjVdlfaya4goYoMCHPBgaZ1nJGYpu_dlWE7iJzag27WVjGG2TPlCqESwa5hAkJw4Z7TsmgE3mcnB2IYPo3aGqup2TvUR20shM9Epp0-fkIOu6UHMuIHooM8Et7fQV-Ec_oJKOezPMA4iZeQPSLsJ8nmo3gDEHOFtIGBL6Bzem_TmpHwvBCXtGRjzI0Mlul_HQhL54MCBIqtmbSNQUN_35Dj-nU2NjVYGNcpHa1mJjrqoDKbOXkKeHdzjbKmyrlIBi6NK8hgW72pPOO-358b7G6-4aCVRaofTIBRvjlmoRXboFAvoSF80GL0nS1FGDrKXeVmIhsI29TI3hyxpg4vpqT4on_7wT0bZCzxlaA2OXEsQd6XJX0NNW_hPZx-dBKCOWyCYVxMFPLAvoncZFoVwl8x-X77tClSAc-UBArN0LoW4-vA4F6lDMNx23lXFNBUBdCGATW71hx1KyuZKrIXHl8nWJi3Bh4phKiTGHMPjL2ilz-Vl61oWd_mXgnSa6YbfUyHeZRvBOTR82Obw23RvswzndSMYWVx0oVVPgdt74ZlyIhfWY4O6vtIRz9CjH0jkRxysRxHuSY-5WsuljQsliJCd5dxxaduAkjUTKmljF7KqnR1nYHS9sCaOpAGMeAaCjOMTjxb8X9K17LiB-zgDzEmzfFofBcln79LDvn4CR84NKavhSWir5sjL4hrRTx5NM0Zdf686Jnjk3Q25JBN_WXm66bdIhGmA9MopAwJF0vH5PcrJvXL48805dmeo091m-Pn5nVvX0Pef_M2iCFs9pMwYJHtUXNHkornKWY9nTvEtqMiGN-8vARSkBUAPXDxyikSniCoAFeuXWkwBBH15Yg375bNLT8s9buVO8BOsk-qIf57CdfHSlCw_Cfgi15DRMH2jUTk7zhwwOm-xKX3Mq6DUheD7P314o2f54WUEcvtAs1PeR8OnvTnFnfHvJoOqfvBkUDMXvRC246lqrqPh3UW_oOjVxmnAWyX_J8ozV8u3fJ_4PJrqgsgdme6tcj_42RykNmsTIrE_mTGT1g6_4=w1526-h963",
        img_url: "icons/python.png",
        title: "Python",
        more: "В основном использую: Huggingface, Google colab, Pytorch, SpaCy. Точно настраивал - LLM модели (Mamba, Facebook) и NER модели (SpaCy)."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_EfMxAYU3kMbc6OFGNTbAIvyt3nzDN3icb9a0rH7t7ZhHxP0JhOSedmPyr5cB_q-E98bGJUekZskRnL7qMlVCMsCfhNfZDXvgwhiztQenps1dXthPeJNqygdDILVdCKz0Woozr48IrwnERoi-HfwP14WHfDJOEB681EPduHNg0iyIp0_fIxHg9qfJpFqnTZ7CBJ-gAF4HKnY1KBV50Ac0ikCZ12P1M2CDh-O-3PaBGXr7aQY-5UgNoCVTRXql2Dm9QcaLAtD2pPscibERAMpjkqPKYBK5Ib0YWzX2wuqpjl2A33XtlRh6Ffzw5KkNKwWOpjdVeNi02RdWXdn7rr_yrPzefGUx2ZMQdnOU8m8qEey6T12vbuSeU94Xh1e7K9kaRISkyGqLShyj-puY6tOXUL4zwv9xrqE3pX2esATFTBaTE0uqQbtA7ejvNpnmCNtoipnzA134zpHMfFDNb4yN4u0c5pxQH9UW8Np5Fiu0sSiO6vXrym2svYLwuoi-kVnlOCI4kbRDw4fkBJMCK6od3NMwklmHeJxKgIXpLJDAqWCll08LK4gzrTmukJIL-F22EJtek1axPPyra_ehEglcgRbEg96oLQIXWy1yKnI52X4UNMbLrtwUtJKHnLKR7DgxBsqEff8e8eKvuC1dVzKPV3opxUw14SCzoJxhfHGs227KKqZas0IAMvpo7Jv0JpBbS1x-PP2uiQChfM7u_mrFP-W84vJsB6nQSjuxKJDC1kpVYcrc7JBb0kaxw2L765n4Nt1g36LD26ItwkHoyQyNVl8qbFVmcwAnHbvZceUUSlvF-C8aNPd1Znht7mRNUeleOXvrTht2FRp0vHvPfYXSSAGhaHL4INQKyVQiwaPo-rZK8tXwhdiEsylOs8THQPNyg7lYrpA4-P9QReDvZO_ORhck8zFYGlg8jUH2sf2M0cOUWhBdNxKwdGQEShnN71X8GC6TjfXGKBarGPVrO9WaT_RjWr2Dpd-Stau1tNaJ8BxN9jthCjoB_zg9TolGLu5SPWfwckTRCsQ7O1x6L7ezhIGlcco4qv234EBHjTwHSQXtR4MdKlsHlYTxEsbE8QKb0Yr0hsBAEX3xWxIvnAQSiOmbvR5MTqkyX2RGl2019d5L_gdEV8PlPcQmRtiuaL6p0yn7Q5udioanEuUvAcejt8z5IVtEPyXAJH858jdtyjnht2DEW1m27KJZmcRZ9yZKRwNeFRfknVm6WuS2Xq8enK2ratd12VHJoml0c1aQ7k51zg4FCuOYyLGGLpIxXOdoaH8CiM0Bad8LHdzi-GhL31JTpr_E-kAgpe3KbeY5KHQWEAcD-ApELCCY1rddc5xcqJ2pKLTJIxSES75Du0t5xWgRqwADZhdirDR8Dc3N9jCjoYiJBWbeTHQkKcWZfJOYq_TX6B4tVvSBOQTIbgQN0N4XQm-P7I0K-jK4fFz5XX49t0B2TpdvA9OGhRR6DUGlf6V9YolK_ZDCm8XeVby7dkFD4tjSPQ7IKTy6lu213gmM6HQAiT15PnVUMcoXg8duPf5ou2kwsjFHEaTrJMEhJgAlJZvpZtoJicl_FEYrwIQLgx0H-pVBWntHXdW6Qk5D-V3xeKVunEaEmhYSUUJDtwB2qO0bXNPFDVhvB_qZDim6PvmQ7pzQ=w1526-h963",
        img_url: "icons/supabase.png",
        title: "Supabase",
        more: "Настраиваю базу данных - регистрация пользователей, отправка сообщений и картинок в реальном времени, и так далее. Редко работаю с Firebase."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_H--vb14lH8D3eMtPEXaIZkoeMQ2ZH4_dbMC1UPNIPc0lCwrqfJ2r74I3ARAQ15hdKX4qGE8dxaXeOfwDhGQOGCQMJBxu2WWxMKy_2uunmdjA8tfDkZjRs8wf9qoNIGttarzxQh-mps68nhwkWMLzlLN99LAEnmI31D8Zy7Rp9RtgUUljprIcAYYVnQNaK9GBXfSI2FqX_ADzBNoJnJBbaGn0dhIT-trLhEOolk4leTRAX1al7MYAPgoCbkXZclb7jqN1LZylyBtrBaqIGq9UvQjD5JwOXhy4kpqW_m6m0zJmvRhIRO5bVaU2-iKhGJnKjx8FU9QUxJ7qQXO0Tpt0FJBJroClJ_NTz_TNY32U81YInSutdRIk9_3CF-jsjAqHabWo2cQWdPmdVAaIB9RVNjZuBc3MLD3chT0K3_WWKhlIe-arTaWSdAyFsmIPSRW_uNepAntr7clYc5DoiLXfHo1IJsYDibaVSON_HvdzhAa1TdlNkBnDuCep4E5Sszsf48h-IuueLPN1Atx00tIIyKB4azg0j7-OJfbEmTPK80HPb79TW9d8NobIKo7J05wdijHo4e-VeYenXSKHHwnkDJAk3J5IxDkAsCWgQXUOJUpipd2PEhhNEXeCBgS4HNua_-31HOhATlZIMnbFhtWtucTQ6jT2LgMX9UlA99nXZ35q0tIixf1hL3nzkyT8PYkAOUtTUOq0FMlH2XiK6Ad_52AzJ73ZyUJ0QfE3Ub13HqW4wkjgGp-6k7N6xljOQt-R7fEj3iDFktMU2RcjsJ8f1Ob8zCfBJshZZ5R5owEav2c6n9Eo66nFWTbRX-QRIL-thhBFQDhMwm7mu2Bdeawq3pZM7UGuo7joWF9wfUKz1d_Cz3ecXmFjA88vohOogV8GjPsLWig9ojmk_fGZyVuNZHOouyop3s0SSxpP_AWvL1Z4IBijuviDrplVQGFXRXJGvujbyO22h9pKBcgLA1oR7wEWRxZqZo7pW23anXpSEiQvWsv0cCwzeN0CXVedDluLJ1aVgIvkI2xYI4pruX7cNGzkAbzeLM4NLc17s4uzR2h4D_zY9jc7Zh5sGz2HAAaib4AVwlmoipvPixxohsUdtpL0I2E_odMrzHmsu9NavgOliHljny11Ccm2WvK3DuIHHyIzEnvpr2Nv4Za2Pb43gB_vCNm6IMD8U8djDeZOYWwYTehsIO1tRPk71FrKVc8-OvE6FbbsbGE5BqZLzVtAf6FNx2acjoy6b_FUS8eY_IrPcqs3mjDgRCYn6v6lGDrsIjoKBDXWAzpuATbeCG8ImBYqqKsYXiqBAj24GmgeplITw4pNGJ9AYo6o4Og7wQqGCweAX_kemxULpmhpo5CmcJEGgqnPCLF2uWkDdLQt3qxE2xAyGdGwj6YsjVDiYbnsD4QiKzrRMUEB3HeB8lYupuLKewHWWNsk_DVM-m-IRlrbqpOeJ70JMMhGVNJEUqh6e_FS9HPR4QJIpvaHcsEjho5LpXmZZ_6xOHa9ltB3npHSK3Uqi1b2pkS0Hz2vGXlSNupwCYNRhhrIK4L3UcI9qbt4ccb95n5qRZPHQXjV3OqR4VMjQ6zYFE6CPQhjWnLPHQAh88SHu7UkJI7UPwUXM4SxsJxVuZS1iUf8Ciov8P2a9cIx7TFRw=w1526-h963",
        img_url: "icons/figma.png",
        title: "Figma",
        more: "Создаю Web и Android интерфесы."
    },
    {
        confetti_url: "https://lh3.googleusercontent.com/fife/ALs6j_E44RKRhC0bdCuyOKymbXXkcXXSVtZZZ-m6D4lD8KUUnGv3S5J7ikkp4w6ZvbePYym1IFXezTNd9B4Y3vSpE6xOT4SgnhfoTlG8OpRpWTB6uSBVxZkXIycQhpSzgdHJl9qDFBHUpMnZH9HHd1OVntyHx5ILzzqTN_jzEeoO-YUAvUc6uJzMLAqIC3UxxDcwa1P3exDQRGxBvROXGqepplkWhDDpk7B6ZIrgS9cCOYaJTMhWUOtH_kIKGh79wUu1ImNoA5Q55X_vIWudiST-sOXXcR_x3JHc3-YmBHkDmkNe7-ItPIbGn8vXlCjwnL2gRk2w1hu9cNnFyU1btokCxshOpu8QFn8XgUTHJOwXNW4Yjy1Zh5qt4kY_EI-Jxkz01mBixpIfBNGT9zuIw8T8d9Co0SU1cL6T0Zx4FqPGydnclicAXvnVDPD_RePsChXMKG-bhKhEmsMvtw8l3UkUl6csCTcfG8RUGhGeLTdv5xv368NuQctPmAMmeiB6hU4uZRW-WzEvIJn2sy8Ctm3O9mViJlwvEHNxaI8JcmE9fucI5vwYpa2HJDioqiNGMzRKQfiR6dzCb18oNl6CV_yBkQ0c1ssDC6hujd-ev9wdz3-ar3cP1FrqvtXsGcxksGTJ1q_irlyj_FgX5mh-iaO8hx2moeJqKBmqE5vFVZXqKqfQtv4LtCfM-dhVWRkmkfVuz5KAUp6cIkmnrWpTIsmyuXpmmvZ-BUfD5p4agkbFPFwd2-d1nL3Hobvx_AKcWgmN0DZwfI0KVl2UULDDhUR1yXxDAcita8v9oc6bnn-a58R3LZoxLYGBac41JCXQ0IKzoZZiaByk8BN_z2vSqLzE2Nwh5i39qJYgAcD4JqfhA8egI3cCUshGxtsFuBYZ1CTTtBiRTiTafVvrV-MKjZQSG7fWFwyq4hUF4TBnUC_2-T-UTAhb4dUDjohzoWCVcvYJ4iMj20Z85CVd1aSes-QMObPz3VaAyrhKN4oArKrwlPc0IqVRtLFf2LGOKmt35Lutw-OBRRzfyDlngxTAnSV_DXHKDwBqaDlZQiRjLNQIh9cdJ1DS2rjGd2BFVEUVAOjh5-umxBz_1IkltoPRTicaLin4qo0TNrDOz3_owcxCv3G4H8O9NTkI83Uip5KEok65KEcvQ6vrhwKAdBXgVeESEER-aW-OGdJDdOgcdEQ_E1OLF6J1w5UzrTVnT-WAToR21mht_cokSZmpV5WHv9gof-KOQ1DBMEsXs-dsHTFN6Y0bVvC-UOssN6iFaHfCu3p08KGFrS86oX4h5vvdoi8l9qqohqo6d4Od3y7x2fNprWK12pO5MeBeQr0EhUjlNvB3X_hgDWljgZOkh-bHdFwIO0ljxPAydhxLiB7XjezHQqqSy4NogfDDmMjciBmIfqO3xo7beGgJvGP4wLQoFHBgMtt_AIwOrgh0Hl57-gsYvSZf9BVkB984AWUX-ayo9_6xSlMKjsJRExljjuJkI0ld4yYgvKMleYm4SUPDKcs4FIVgsW0567huQbKS4ZBSVi1a1EgtqRDXo7IyAbRsHXDujwg3FrB2OkV-1l8CF7p5aNN3VHvDewpZX4EmB6NyYsnygx_lXeqwYUsbWdqNZJb9oyjT6cFDM-0o3DVE5UcBODfpgCOVcCbRvSo=w1526-h963",
        img_url: "icons/github_light.png",
        title: "Github",
        more: "Использую для хранения проектов. Знаю базовые команды git. Иногда прибегаю Github pages."
    }
];

const blok_stack = document.querySelector('.blok_stack');

my_stack_json.forEach(item => {
    blok_stack.innerHTML += `
        <div class="blok_stack-skill" atrr-confetti="${item.confetti_url}">
            <div class="header">
                <img class="image" src="${item.img_url}" alt="">
                <span class="title">${item.title}</span>
                <div class="svg_more">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/></svg>
                </div>
            </div>
            <div class="more">
                <span>${item.more}</span>
            </div>
        </div>
    `;
});


const blok_stack_skill = document.querySelectorAll(".blok_stack-skill .header");

blok_stack_skill.forEach(header => {

    header.addEventListener('click', () => {
        const blok = header.parentElement;
        
        document.querySelectorAll('.blok_stack-skill').forEach(item => {
            if (item !== blok) {
                item.classList.remove('active');
            }
        });

        blok.classList.toggle('active');
    });
});


const my_stack = document.querySelector(".menu > .my_stack");
const bloks = document.querySelector(".bloks");

const burger_svg = document.querySelector(".burger_svg");
const close_svg = document.querySelector(".close_svg");

my_stack.onclick = function() {
    menu.classList.remove("active");
    valery_burger.classList.remove("active");

    bloks.classList.add("active");

    burger_svg.classList.add("active");
    close_svg.classList.add("active");

    gsap.to(".blok_stack-skill", {
        y: 7,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.inOut"
    });
}


valery_burger.onclick = function() {
    if (!bloks.classList.contains("active")) {
        this.classList.add("active");
        menu.classList.add("active");
    } else {
        gsap.to(".blok_stack-skill", {
            y: 14,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.inOut"
        });

        setTimeout(() => {
            burger_svg.classList.remove("active");
            close_svg.classList.remove("active");
            bloks.classList.remove("active");
        }, 1300);
    }
}

burder_close.onclick = function()
{
    valery_burger.classList.remove("active");
    menu.classList.remove("active");
}
