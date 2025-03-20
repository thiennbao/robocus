import Banner from "@/components/partials/banner";
import Header from "@/components/partials/header";
import Intro from "@/components/partials/intro";
import Spacer from "@/components/partials/spacer";
import Organizer from "@/components/partials/organizer";
import Stats from "@/components/partials/stats";
import Overview from "@/components/partials/overview";
import Timeline from "@/components/partials/timeline";
import Lookback from "@/components/partials/lookback";
import Awards from "@/components/partials/awards";
import Footer from "@/components/partials/footer";

export default function HomePage() {
  const pastEventImages = [
    "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/480576994_1046963623905880_5901547473335744721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFX-tTRDINhGaBWQfTboKVpD10e-lA37t0PXR76UDfu3Wq9wH-O6bseZzDKFaxrV_TcAsCfaIt5sW_7AhekefL4&_nc_ohc=ROAxmwzF4uAQ7kNvgG66D7y&_nc_oc=AdlKJaI1YqOWkFvH9kNk8SmuoByy4L6cel6E-EiMyh2cavva1OE0GvRkOVROvmPPKhE&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=8z1PgjtXyhZXT_Z2vkbqaw&oh=00_AYF9qa0Ykf_gfYsXfBDHsV8rV4I5n8n5QlD0guHBeEuayQ&oe=67E1EE90",
    "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/480907971_1046963547239221_616134154690089945_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFEbL-KLril5oBU2axnkP9zemfbWxmoPkd6Z9tbGag-R2mBGT0E6pmtEvpOR336VjDs-nMVTPrNCzXwzKSWiFnO&_nc_ohc=g8BjeoJozbMQ7kNvgEMqcxZ&_nc_oc=AdmUDHtjxJa4SvJH4Pghdp-UHMxwSS1ylwfKLuHtoZf7lFurSGGi5D2uMQE-kz3eXI0&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=SuOPIfRw5aCgklW0YUEF3g&oh=00_AYH0F5_ZlK3AF5zooBCCHAwVarVDz3eQ5qV99i_yAdNmyQ&oe=67E1D989",
    "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/480496084_1046963650572544_7918609061916712447_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH71UaZWLyT92aQhiC6xyn9QcOUh03QYwdBw5SHTdBjB8bN4fDq50U1ra_pL-QW9l73h7onxbYyZdsXg7rIdceV&_nc_ohc=5c30kHyZQiEQ7kNvgHUMJpH&_nc_oc=AdmJ_7b2T-ETey0GKGp_JJKw_7TdqNmtRUD4UBCZl9R_kgHjXLYZxgvWmHQERABK_eQ&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=oeTwDv9DOCe7Fd1qnNAbiA&oh=00_AYEd90fv_2LhwlzIg76FPuXuZE5W882espVw3blLEhlEyQ&oe=67E1D194",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/480598426_1046964583905784_5630213917150119062_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEgPFU84dEVnQg-JChzM21jBS5s7hp6sRcFLmzuGnqxF_7GGNYss_mlbPrYgneQcNmT6n9H3T6tvhQfYkaP9ol-&_nc_ohc=nTZVjMMBdEMQ7kNvgE8kxiU&_nc_oc=AdmCMzTBhDm0oV535gJUO7Vp7HaInQ9vxGO78y9nszXOFKg8hR9fzm_D3UTRQAVJ9WM&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=zraBxNWJ0P6whzbV4Ql4cw&oh=00_AYGzn4JimQ5DCwHqXgyKpzjSFhuDnVrP5OWEqV-QllmGvA&oe=67E1E06C",
    "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/480647752_1046964833905759_8558515011474341311_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGplCTjpeI0oGDQnIL_qR1Y9UzvYA_jUk71TO9gD-NSTqGBYwMe-Yr5pp3-Pzd5vXr-TP_l6B8JqX2RoNWw7Sdk&_nc_ohc=aeta0_K8J70Q7kNvgEicAya&_nc_oc=AdlGlCEHmgXnjkgP0kOnN9NcUpxo0lSo3E641iRFz0eZLzyD0dnGZOlCNqw6kH_wDKE&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=zRxAAt2lCqVezqhoubiU-g&oh=00_AYHusKjhn_s4uvnF7oFexYsCQ1o8inQR2_x733ZXmkNtnQ&oe=67E1DED9",
    "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/480568219_1046963977239178_7832369828806167965_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG3zQZktpzKvk4deD0bqNCvv4FfQ_Yj5Uy_gV9D9iPlTIOC7Oi9x-S1ULg7UJLLYbkx0FFitptzS_qbc8-HNi_W&_nc_ohc=lGU2FtT5uGgQ7kNvgHHdysL&_nc_oc=AdllkJSeTNfrFwF4o3K6LJ_31FIfPkBA7e88MnUEvFk6wHDS7JEFm7QgsO1vy7MxuHc&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=aR0f8jz3DCT8KqhOG3v4HA&oh=00_AYFURtqwnbNZgi0JZSyVr8EoDwRLCzLauzxVwZWGn-SPIA&oe=67E1E696",
    "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/480673173_1046963787239197_3106044950890156585_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFIx-b--SFK-EMjEIMpi9v0yjdwrraEEZHKN3CutoQRkePeNu3FRdSmR30w4sFARTM743xWDJQndIkeG2YrbYmi&_nc_ohc=s2nhCAhPHm0Q7kNvgF7gQSf&_nc_oc=AdmaxDtlnal8uYIB-fHqoy-dHQaVuJGwOhl0onrRUsgRw2mDDEP2b4mUZniK-pdDCS0&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=Wsx9Qzxiit31x6V8eblucw&oh=00_AYGKb_uLarv4LvB8qXiQ0mbi7tlK2llFkDKn0SBfAEKw3A&oe=67E1E834",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/480751692_1046962317239344_5424572754654869840_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF_L-4r_mSi7ze4OFX1IeZ7ePdwQBNnjyF493BAE2ePIdM6G4DXaspnWHzKQAyd_YJN76Gn_D_SxvgntLsa1Wee&_nc_ohc=FNbEypvIzfIQ7kNvgFgX3_m&_nc_oc=AdkYnh1Fn14btLYM9DBiIVh692ex9aYsEg7nJlLggt6TYDKX6iZsSdHDfMO_BsJYY20&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=Mhu1848IKrNL7NZvoxRu2A&oh=00_AYHM-G1dq-dmaV-wzwemGfPP22AjNWFT6hUCktYt3liNGA&oe=67E1C197",
    "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/480579971_1046962273906015_4722030810171548312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGzIrvAeDgZZ6JOhoyLCU0e1j0VLXL0yQbWPRUtcvTJBhVZzjAwj6AW9A55GuuF2hedzb0xYb2YhLVdF3pkeHue&_nc_ohc=w27dNwcCI1UQ7kNvgHGkTdA&_nc_oc=AdnWmY5BlY8TrMHYFoyyCfZ9K2L3B56J71kbEnF2prGIrFw_HW3wO7WfPNAOKK-JznY&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=288UO_pXqr_iDFtu7GNfhQ&oh=00_AYHBZYjViMKDKQ757i-aLrziLg2InjyDuIoMGOu5mHS-JQ&oe=67E1CD12",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/480767898_1046962300572679_1077960172371135765_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG2RyTBpeTqPVXOODjujatcXCjP8RUuJY5cKM_xFS4ljmA5ix5IY9FImJboYVZkilR0dpfmweWaD7k_3ReK2lDV&_nc_ohc=46hXeBWWgbcQ7kNvgF2m_Nf&_nc_oc=AdkidG-z_4aLaa4tlCIHztnd_HgZYXJShQbbqhX_DrxlU3tCrDGU-5iLSZwXwaTfR6E&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=lGeJSfPXn3KfVThClyE_OQ&oh=00_AYH5EnuqRupuWc47UN07Kefnap0OhR9xMLG3pcTL1IGWKQ&oe=67E1C4EF",
    "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/480740308_1046963533905889_7629950792962641802_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHV4iitFNV1V5LRYBMYPlakxAIPZqBN_FvEAg9moE38W6VZrkkOQwpqnzLcUK_0_RJAO0QuNYrUk8H4N6l8a6-B&_nc_ohc=U7SKnSf0CKEQ7kNvgHP-QCK&_nc_oc=AdmtbXKrRs0aHiJZ_o5fBN_4d5QRqrGta8HlpiD3aQ3PCyTgwZ4p9IwN22SpuH0JoBU&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=4KyNNVUyVC4XCNur2GnR7Q&oh=00_AYG3qLVCz5HyKpWuoYlNrcSpEH_JXzs8IVDW9K-XwQbTcA&oe=67E1D859",
    "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/480592075_1046959447239631_3549599131109792419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF_JAPwtFAN-ak5NK4SiT4Q8GtUx7WlOoLwa1THtaU6gkMtdN_XiWXcqkarORhW1XBa0z_NU9lv0vSG1KFmtGpX&_nc_ohc=S6BPWppYpEEQ7kNvgEWk8d9&_nc_oc=Adku-U0m20I8LM5bdRtdpuc_IZTS4YwIKGBrGHjkJVpNwUUteJZA4By_JS77r3-xUWA&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=VaJGSrEt-lVV7CR_h2DOCg&oh=00_AYEsG8FbGIYHG7nRPZokLHmk_zM5yhQ0wL2EFv-FvRCd0w&oe=67E1EF82",
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/480701394_1046965863905656_6859282197475333588_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEWATN86MZwxYr4qsqJicH3wqu_IiNpG_rCq78iI2kb-nZ7UC7WzSC3LAAYzQZVzHdPCw1dbeiTxBY5t2IhaoeG&_nc_ohc=YlDN3JrracUQ7kNvgG6De8M&_nc_oc=Adnz9k849ztHAqXdFLIus_wzeMEZ6_uK1dHaA2K95pPA1H3uRgrsJsFTmujSsrVvLpA&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=CDbG88cgTEAq8J6Mok5_og&oh=00_AYE7sx9zoBgAwQ35S4K74WR1Iup8M4wbp5WO5VaV-0ig3Q&oe=67E1E441",
    // 
    "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/482020227_1055630123039230_5784166226377557292_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEd4dcvW6XDJYcCCaClZeT_17RBGGaOvxXXtEEYZo6_FXri6ONupk2rUklvcnnTrT1zxguRgLHuGFE_rTu_JuhV&_nc_ohc=_YKNzPzh1j4Q7kNvgGsYn9h&_nc_oc=AdnGcIHKN16YhbXKCEriGl6sfTYAtBad-B8DY4SNHgIhPtqqFCssnteqnI-jUZfLZQk&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=iKbPP-vOrq7_1KQf9B6VCA&oh=00_AYFmrQ_Mrm7Lu-1DkXzXifMmgX4VZ8T3z0SktguIeIykhw&oe=67E1DFE3",
    "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/482216962_1055630129705896_6015419310833646707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbMkwfKxhR6wmcEFK1XQKSHIoT-pqrILkcihP6mqsguRZGFo7endw0Au70O5lNwYig7c3rYXV-6qmG9Z9TJdin&_nc_ohc=C0PG7vqGk0gQ7kNvgGXWpgG&_nc_oc=AdmTgPjKwiJFMtCLKA2m62BDGEh3_FnhqN7buMu_y5A6yC6AUQwxL0q0zjiTtCNNdAQ&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=xI15cmx89ZJ9r5pLuZjyDA&oh=00_AYEHVJx4fPESSnHAz0w_9ZA73iX74xZfzvwELCatcIvHdA&oe=67E1EC5F",
    "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/481239105_1055629939705915_4085810234084050514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEEvoFlKzhQCNd05QYCuuNuW_tDvMuVQdVb-0O8y5VB1YPH8oXxOOZi5sW1rU5-Xpga5q-GHZG2yiT67xcgaOLw&_nc_ohc=5u0xp7RzPAwQ7kNvgGNWfuB&_nc_oc=AdkCQbFAXHxshczxGOWZ4WKZlO7yVOxFSBJiEoOGCV0IeTdH33YAAAq3m3mxKvSelVY&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=SEYB9MslF7w9s5InY8aPXw&oh=00_AYGAi2zwHv_XFK0WVzO4ZqAlbZitONMo-5JTFNLaNUUrng&oe=67E1DC6D",
    "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/481443208_1055630086372567_7708801784645247163_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHjtHT4UtO6-QFvS2rQwTaof-f47TAJGVB_5_jtMAkZUE9ku3N-HlKxsIUSBg8rBGcoE8KQSsGpyqN-wuwwFi3q&_nc_ohc=vvegvIq431cQ7kNvgEpa-mo&_nc_oc=AdkVvxTz5QJ5l_AFW1agVL4Ccbw0FIzELi4NGqA8jru69dpIA1-cJSsVAkeRJ0isNyo&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=kfhzWmyQR9zVVZBardDyjQ&oh=00_AYF5wJ8z0jAFj0dTkVEdCqGklSGikTgzwNLB7k0gAkC2hg&oe=67E1D33E",
    "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/481960300_1055630179705891_1837987790260812636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHI0NHX2DTaSlExhR6Lsan0oBFTsp8D4EqgEVOynwPgSjhxQvKq4uexcux_E0NO95cgnJzxQkkje9EHRLXrDe9C&_nc_ohc=_JLe8zW_P-4Q7kNvgHoTZZN&_nc_oc=Adk-ODIROBuJZz_8KJkZY3bYVeS1lxMNZPZH-2Qn5QH1dtvFIUrV0uUlNj00ld4hK8s&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=p_Kr_UsvGhjOBC6senDxOA&oh=00_AYHGpmHpF845EYAa49Z0o4HLPUG7jHJ0FFMLV-cybq0FdQ&oe=67E1D807",
    "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/481450876_1055630199705889_5249913710945759915_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHVm-NJcLB5ewXx_HNB-dTiSJ6T3BWFrK9InpPcFYWsr2JIrbUY9UPxWV6Dwa-9jJhu0GdOjkxyKMjc7_MSEyqS&_nc_ohc=fKKIoqO8LWsQ7kNvgGo7BOk&_nc_oc=AdlBaNeXFBCWvADb26RSx8I32QVl1Ek8Vnhz7pRVi85t7otyEq2mRR6bYWYiE7e2YHE&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=hPO4KXYCGWF98Rm3lhEVvQ&oh=00_AYHKKvRdd-JcdTvzpN0JeonMkwMQGlFAEF4nFOjDGLydog&oe=67E1C5EF",
    "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/481907481_1055630206372555_1296425555820948762_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmXO4BOrWjCybNrSLsqe01xMLg_nmEpuTEwuD-eYSm5EZbf-m7NyypF1XKlAm4mUuAyEQPExxC1BOo2B-nbaIO&_nc_ohc=Kf3Db1C2DooQ7kNvgFzcSQp&_nc_oc=Adlz1_D8btLG2iPh8NAwJnYn37aG9MXiRRd8tHc1NYrB9PjYy7fwBfCRhx50nuvmjck&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=aUegHWHLJ-w1bH6PRxJTwA&oh=00_AYFq3wnomeJHsvslWRatSVhc8kVTjLE3ysF3TjKXJ_qexg&oe=67E1E243",
    "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/481963594_1055089689759940_8947739646974759472_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGHaqQi2lPyifAQy58DL3JRlcKNT0k4Mq6Vwo1PSTgyrrdnAmLK7tzn-fFQmug9O0zU5I25WCBqt_1cmV58R_k0&_nc_ohc=KWcBsfZ1LgsQ7kNvgF2138-&_nc_oc=AdlNMW0FUTb_lNb1eXs-o7dK4ZG_k7qHzJ3izrF38s0KvObCWznvf3ALoewx4Jnw3rY&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=MTn3p3QbU6Y7SLGyBW-ULw&oh=00_AYFMuDiFFyFslcaGgHHvH-quAX0Jq-qN3ZiPqnKBMlZPaw&oe=67E1CDDF",
    "https://scontent.fhan4-5.fna.fbcdn.net/v/t39.30808-6/481711964_1055089676426608_5390530261084593267_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHhetWUhGr31dKbqYheiIETy9Tk5lV25jvL1OTmVXbmOzaH2RhGvfWgP2kzn1uLl9ZQYIg30E0fLaiLXzFYlWbK&_nc_ohc=TRF8GfOwvPkQ7kNvgHgz1Go&_nc_oc=AdkS36svsFqpMrrRTMSTAcKVlnluo7ti8J5IQzn2RLjzYuNplNCEvZh9d4klDMjCdzM&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=zvFbX1xEwih8ksz3V6AFBg&oh=00_AYGTFSOidW3n1mSWqWLjUJbfS9MU6n6q4tXAU0AIhZoUmA&oe=67E1EFBF",
  ]
  return (
    <div className="container mx-auto px-4 xl:px-24">
      <Spacer count={1} />
      <Spacer count={4} />
      <Banner />
      <Spacer count={4} />
      <Intro />
      <Spacer count={4} />
      <Organizer />
      <Spacer count={4} />
      <Stats />
      <Spacer count={4} />
      <Overview />
      <Spacer count={2} />
      <Timeline />
      <Lookback images={pastEventImages}/>
      <Spacer count={4} />
      <Awards />
    </div>
  );
}
