const companyBtnEls = document.querySelectorAll(".company__name");
const jobTitleEl = document.querySelector(".job-title");
const jobPeriodEl = document.querySelector(".job-period");
const jobLocationEl = document.querySelector(".job-location");
const detailListEl = document.querySelector(".job-detail-list");

// button select event
companyBtnEls.forEach((el, selectedIndex) => {
	el.addEventListener("click", () => {
		companyBtnEls.forEach((el, i) => {
			// reset the content
			el.setAttribute("aria-selected", "false");
			changeOpacity(0);
			if (i === selectedIndex) {
				el.setAttribute("aria-selected", "true");
				setTimeout(() => {
					changeContent(selectedIndex);
				}, 500);
			}
		});
	});
});

// functions
function changeContent(index) {
	switch (index) {
		case 0:
			jobTitleEl.innerHTML = "Inventory Clerk (produce department)";
			jobPeriodEl.innerHTML = "January 2023 - Current";
			detailListEl.innerHTML = `
				<li class="job-detail">
					Monitored and maintained current inventory levels
				</li>
				<li class="job-detail">
					Received, unpacked, and delivered goods; re-stocked items as necessary
				</li>
				<li class="job-detail">
				<i>Currently looking for web developer position</i>
				</li>`;
			jobLocationEl.innerHTML = "Calgary, Canada";

			changeOpacity(1);
			break;
		case 1:
			jobTitleEl.innerHTML = "Data Entry Specialist";
			jobPeriodEl.innerHTML = "November 2021 - June 2022";
			detailListEl.innerHTML = `
				<li class="job-detail">
					Processed over 3,000 customer orders per month, including payment
					logs and refunds
				</li>
				<li class="job-detail">
					Collaborated with the manager to improve the data system, resulting
					in about 3 times more clients in processing patient data
				</li>
				<li class="job-detail">
					Supported additional functions in administrative, payroll, and
					reception areas
				</li>`;
			jobLocationEl.innerHTML = "Calgary, Canada";

			changeOpacity(1);
			break;

		case 2:
			jobTitleEl.innerHTML = "ELS Teaching supporter";
			jobPeriodEl.innerHTML = "March 2021 - September 2021";
			detailListEl.innerHTML = `
				<li class="job-detail">
					Taught students English with English native teachers and interpreted when necessary
				</li>
				<li class="job-detail">
				Managed students’ progress by observing their work and communicating with native teachers
and manager
				</li>`;
			jobLocationEl.innerHTML = "Incheon, South Korea";
			changeOpacity(1);
			break;

		case 3:
			jobTitleEl.innerHTML = "Laboratory Operation Assistant";
			jobPeriodEl.innerHTML = "January 2018 - December 2018";
			detailListEl.innerHTML = `
				<li class="job-detail">
					Monitored and recorded experiment processes and results under senior management
				</li>
				<li class="job-detail">
				Performed routine maintenance (e.g., occupancy, equipment records)
				</li>
				<li>
				Pre-treated samples for upcoming tests following procedure
				</li>`;
			jobLocationEl.innerHTML = "Ossining, USA";
			changeOpacity(1);
			break;

		case 4:
			jobTitleEl.innerHTML = "Laboratory Technician Internship";
			jobPeriodEl.innerHTML = "December 2015 - February 2016";
			detailListEl.innerHTML = `
				<li class="job-detail">
					Carried out biological experiments such as DNA, RNA extraction, RT- PCR, and Virus
Neutralizing Antibody Assay
				</li>
				<li class="job-detail">
				Recorded the effect of Avian influenza in inoculated hens’ eggs
				</li>
				<li>
			Assisted preparation of the autopsy of commissioned animals
				</li>`;
			jobLocationEl.innerHTML = "Yanyang, South Korea";
			changeOpacity(1);
			break;
	}
}

function changeOpacity(num) {
	jobTitleEl.style.opacity = num;
	jobPeriodEl.style.opacity = num;
	detailListEl.style.opacity = num;
	jobLocationEl.style.opacity = num;
}
