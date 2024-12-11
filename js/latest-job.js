window.addEventListener("load", function () {
  const LATEST_JOB_DATA_URL = "/apis/latest-job.json";

  const getData = async () => {
    try {
      const res = await fetch(LATEST_JOB_DATA_URL);
      const data = await res.json();
      const ArrayData = data.positions;
      const htmlContentArr = ArrayData.map((item) => {
        return `<div class="swiper-slide box-container">
                  <a href="#" class="box-content-wrap">
                    <div class="box-thum">
                      <div class="box-thum-img">
                        <img src=${item.title_img.thumb} alt="직업 사진" />
                      </div>
                      <div class="box-info-top">
                        <div class="job-pass">${
                          item.reward.formatted_total
                        }</div>
                      </div>
                    </div>
                    <div class="box-info-bottom">
                      <div class="job-name">${item.position}</div>
                      <div class="job-company">${item.company.name}</div>
                      <div class="job-etc">${item.address.location} ${
          item.address.district
        }·${
          item.career.annual_from
            ? item.career.annual_to >= 100
              ? `경력 ${item.career.annual_from}년 이상`
              : `경력 ${item.career.annual_from}-${item.career.annual_to}년`
            : `신입-경력 ${item.career.annual_to}년`
        }</div>
                    </div>
                  </a>
                  <a href="#" class="xi-bookmark-o bookmark"></a>
                </div>`;
      });
      const htmlContent = htmlContentArr.join("");
      const latestJobWraper = document.querySelector(
        ".latest-slide . box-container-set "
      );
      latestJobWraper.innerHTML = htmlContent;
    } catch (error) {
      console.log(error);
    }
  };
  getData();
});
