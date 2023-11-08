<template>
	<div id="invoice-page">
		<vs-card>
			<!-- INVOICE METADATA -->
			<vs-row class="leading-loose p-base">
				<vs-col vs-xs="12" vs-md="12" vs-lg="6">
					<h1 class="mb-8">Invoice</h1>
					<img src="@/assets/images/logo/logo-main.png" width="100" alt="vuesax-logo">
					<div class="invoice__invoice-detail mt-6">
						<h6>INVOICE NO.</h6>
						<p>{{ invoiceDetails.invoiceNo }}</p>
						 <h6 class="mt-4">Transction ID</h6>
						 <p>YTYKSH6767689889RT</p>
						<h6 class="mt-4">INVOICE DATE</h6>
						<p>{{ invoiceDetails.invoiceDate | date(true) }}</p>
					</div>
				</vs-col>
			   
				<vs-col vs-xs="12" vs-md="12" vs-lg="6">
					<h5>To</h5>
					<div class="invoice__recipient-info my-4">
						<p>{{ recipientDetails.fullName }}</p>
						<p>{{ recipientDetails.addressLine1 }}</p>
						<p>{{ recipientDetails.addressLine2 }}</p>
						<p>{{ recipientDetails.zipcode }}</p>
					</div>
					<div class="invoice__recipient-contact ">
						<p class="flex items-center">
							<feather-icon icon="MailIcon" svgClasses="h-4 w-4"></feather-icon>
							<span class="ml-2">{{ recipientDetails.mailId }}</span>
						</p>
						<p class="flex items-center">
							<feather-icon icon="PhoneIcon" svgClasses="h-4 w-4"></feather-icon>
							<span class="ml-2">{{ recipientDetails.mobile }}</span>
						</p>
					</div>
				</vs-col>
			   
			</vs-row>

			<!-- INVOICE CONTENT -->
			<div class="p-base">
				<!-- INVOICE TASKS TABLE -->
				<vs-table hoverFlat :data="invoiceData.tasks">
					<!-- HEADER -->
					<template slot="thead">
						<vs-th>Product Name</vs-th>
						<vs-th>Item</vs-th>
						<vs-th>RATE</vs-th>
						<vs-th>AMOUNT</vs-th>
					</template>

					<!-- DATA -->
					<template slot-scope="{data}">
						<vs-tr v-for="(tr, index) in data" :key="index">
							<vs-td :data="data[index].task">{{ data[index].task }}</vs-td>
							<vs-td :data="data[index].hours">{{ data[index].hours }}</vs-td>
							<vs-td :data="data[index].rate">${{ data[index].rate }}</vs-td>
							<vs-td :data="data[index].amount">${{ data[index].amount }}</vs-td>
						</vs-tr>
					</template>
				</vs-table>
			</div>

			<!-- INVOICE FOOTER -->
			<div class="invoice__footer text-center  p-base">
			 COPYRIGHT @ 2020 Neor, All rights Reserved
			</div>
		</vs-card>
	</div>
</template>

<script>

export default{
	data() {
		return {
			companyDetails: {
				name: 'Microsion Technologies Pvt. Ltd.',
				addressLine1: '9 N. Sherwood Court',
				addressLine2: 'Elyria, OH',
				zipcode: '94203',
				mailId: 'hi@example.com',
				mobile: '+91 999 999 9999',
			},
			recipientDetails: {
				fullName: 'Kathryn E Hardman',
				addressLine1: '3764  Whiteman Street',
				addressLine2: 'Browns Mills',
				zipcode: '90001',
				mailId: 'e3vvm6fpww@groupbuff.com',
				mobile: '+609-893-1139',
			},
			invoiceDetails: {
				invoiceNo: '5274801',
				invoiceDate: 'Mon OCT 21 2020 07:46:00 GMT+0000 (GMT)',
			},
			invoiceData: {
				tasks: [
					{
						id: 1,
						task: 'My Product',
						hours: 120,
						rate: 12,
						amount: 20039,
					},
					{
						id: 2,
						task: 'Our Product',
						hours: 231,
						rate: 90,
						amount: 12000,
					},
				],
				subtotal: 89890,
				discountPercentage: 5,
				discountedAmount: 2100,
				total: 90000,
			}
		}
	}
}
</script>