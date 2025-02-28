# Responsiveness

```
/* ******************** media configuration ******************** */

/* xl 1200+ */
@media screen and (min-width: 1200px) {
  .image-main {
    height: 200px;
  }
}

/* lg 992 - 1199 */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .image-main {
    height: 133px;
  }
}

/* md 768 - 991 */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .image-main {
    height: 300px;
  }
} 

/* sm 576 - 767 */
@media screen and (min-width: 576px) and (max-width: 767px) {
  .image-main {
    height: 300px;
  }

  .caption {
    height: 35px;
  }
}

/* xs 0 - 575 */
@media screen and (max-width: 575px) {
  .caption {
    height: 35px;
  }

  .links-icons {
    height: 10%;
    width: 10%;
  }
}

/* landscape */
//@media screen and (orientation: landscape) {}

```
