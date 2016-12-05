require 'pry'
require_relative '../bank'

describe Bank do
  let(:bank) do
    Bank.new "RSpec Bank"
  end

  describe ".new" do
    it "should create a new instance of the Bank class" do
      expect( bank ).to_not eq nil
    end

    it "should be assigned a name as an instance variable" do
      expect( bank.name ).to eq "RSpec Bank"
    end

    it "should start with no accounts" do
      expect( bank.accounts.count ).to eq 0
    end
  end

  describe "#create_account" do
    it "should create an account with a given name and starting value" do
      bank.create_account("Gerry", 200)

      expect( bank.accounts["Gerry"] ).to eq 200
    end
  end

  describe "#balance" do
    it "should return the current balance for a given customer" do
      bank.create_account("Gerry", 200)

      expect( bank.balance("Gerry") ).to eq 200
    end
  end

  describe "#withdraw" do
    it "should withdraw given amount from a customer's account" do
      bank.create_account( "Bill Murray", 200 )
      bank.withdraw( "Bill Murray", 100 )

      expect( bank.balance("Bill Murray") ).to eq 100
    end

    it "should ignore requests for amounts exceeding the current balance" do
      bank.create_account( "Bill Murray", 200 )
      bank.withdraw( "Bill Murray", 1_000_000 )

      expect( bank.balance("Bill Murray") ).to eq 200
    end
  end

  describe "#deposit" do
    it "should deposit a given amount into a customer's account" do
      bank.create_account( "Bill Murray", 200 )
      bank.deposit( "Bill Murray", 400 )

      expect( bank.balance("Bill Murray") ).to eq 600
    end
  end
end
