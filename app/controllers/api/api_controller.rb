class Api::ApiController < ApplicationController
  skip_before_filter  :verify_authenticity_token

  def records
    render json: {
      results: [
        {
          officer_name: 'test1',
          officer_address: '10 ha noi',
          officer_img: '',
          officer_echange: 90,
          records: [
            {
              base_currency: 'US',
              exchange_currency: 'Pound',
              rate: 80,
              commission: "5%"
            },
            {
              base_currency: 'US',
              exchange_currency: 'Pound',
              rate: 80,
              commission: "5%"
            }
          ]
        },
        {
          officer_name: 'test1',
          officer_address: '10 ha noi',
          officer_img: '',
          officer_echange: 90,
          records: [
            base_currency: 'US',
            exchange_currency: 'Pound',
            rate: 80,
            commission: "5%"
          ]
        },
        {
          officer_name: 'test1',
          officer_address: '10 ha noi',
          officer_img: '',
          officer_echange: 90,
          records: [
            base_currency: 'US',
            exchange_currency: 'Pound',
            rate: 80,
            commission: "5%"
          ]
        }
      ]
    }
  end


  def process_map
    byebug
  end

  private
    def map_params
      params.require(:api).permit(:lng, :lat)
    end
end
